import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ChatApp } from '@/components/chat/ChatApp'

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}))

function mockFetch(answer: string) {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ answer }),
  }))
}

beforeEach(() => mockFetch('Test antwoord van de AI'))
afterEach(() => vi.restoreAllMocks())

describe('ChatApp', () => {
  it('toont de lege staat bij opstarten', () => {
    render(<ChatApp />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/wat wil je verbeteren/i)
  })

  it('gaat van lege staat naar berichtenoverzicht na verzenden', async () => {
    render(<ChatApp />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'Hallo coach')
    await userEvent.keyboard('{Enter}')

    await waitFor(() => {
      expect(screen.getByText('Test antwoord van de AI')).toBeInTheDocument()
    })
    expect(screen.getByText('Hallo coach')).toBeInTheDocument()
  })

  it('verstuurt via een suggestie chip', async () => {
    render(<ChatApp />)
    await userEvent.click(screen.getByText('Drills voor mijn positie'))

    await waitFor(() => {
      expect(screen.getByText('Test antwoord van de AI')).toBeInTheDocument()
    })
  })

  it('toont foutmelding bij mislukte fetch', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Fout van de server' }),
    }))
    render(<ChatApp />)
    await userEvent.type(screen.getByRole('textbox'), 'Test')
    await userEvent.keyboard('{Enter}')

    await waitFor(() => {
      expect(screen.getByText('Fout van de server')).toBeInTheDocument()
    })
  })
})
