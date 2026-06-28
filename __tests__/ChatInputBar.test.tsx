import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ChatInputBar } from '@/components/chat/ChatInputBar'

describe('ChatInputBar', () => {
  it('roept onSend aan met getrimde waarde en leegt daarna het veld', async () => {
    const onSend = vi.fn()
    render(<ChatInputBar onSend={onSend} pending={false} />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, '  Hallo coach  ')
    fireEvent.submit(input.closest('form')!)
    expect(onSend).toHaveBeenCalledWith('Hallo coach')
    expect(input).toHaveValue('')
  })

  it('verstuurknop is disabled wanneer het veld leeg is', () => {
    render(<ChatInputBar onSend={vi.fn()} pending={false} />)
    expect(screen.getByRole('button', { name: /verstuur/i })).toBeDisabled()
  })

  it('blokkeert submit wanneer pending', async () => {
    const onSend = vi.fn()
    render(<ChatInputBar onSend={onSend} pending={true} />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'Hallo')
    fireEvent.submit(input.closest('form')!)
    expect(onSend).not.toHaveBeenCalled()
  })

  it('stuurt geen leeg bericht', async () => {
    const onSend = vi.fn()
    render(<ChatInputBar onSend={onSend} pending={false} />)
    fireEvent.submit(screen.getByRole('textbox').closest('form')!)
    expect(onSend).not.toHaveBeenCalled()
  })
})
