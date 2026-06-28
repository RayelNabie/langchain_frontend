import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ChatEmptyState } from '@/components/chat/ChatEmptyState'

describe('ChatEmptyState', () => {
  it('toont de heading en sub-tekst', () => {
    render(<ChatEmptyState onSend={vi.fn()} pending={false} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/wat wil je verbeteren/i)
    expect(screen.getByText(/jouw persoonlijke voetbalcoach/i)).toBeInTheDocument()
  })

  it('toont alle suggestie chips', () => {
    render(<ChatEmptyState onSend={vi.fn()} pending={false} />)
    expect(screen.getByText('Drills voor mijn positie')).toBeInTheDocument()
    expect(screen.getByText('Conditie opbouwen')).toBeInTheDocument()
    expect(screen.getByText('Tactisch advies')).toBeInTheDocument()
  })

  it('roept onSend aan met de chip tekst wanneer erop geklikt wordt', async () => {
    const onSend = vi.fn()
    render(<ChatEmptyState onSend={onSend} pending={false} />)
    await userEvent.click(screen.getByText('Drills voor mijn positie'))
    expect(onSend).toHaveBeenCalledWith('Drills voor mijn positie')
  })

  it('chips zijn disabled wanneer pending', () => {
    render(<ChatEmptyState onSend={vi.fn()} pending={true} />)
    for (const btn of screen.getAllByRole('button').filter(b => b.classList.contains('chat__suggestion'))) {
      expect(btn).toBeDisabled()
    }
  })
})
