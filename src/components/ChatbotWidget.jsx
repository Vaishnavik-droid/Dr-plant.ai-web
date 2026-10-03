import { useEffect, useRef, useState } from 'react'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
import { getAssistantReply, suggestedQuestions } from '../services/aiService'

const openingMessage = {
  sender: 'bot',
  text: 'Hi! Ask me about crop stress, disease signs, watering, or nutrients.'
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([openingMessage])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, loading, open])

  const sendMessage = async (message = input) => {
    const text = message.trim()
    if (!text || loading) return

    setMessages((current) => [...current, { sender: 'user', text }])
    setInput('')
    setLoading(true)

    try {
      const history = messages.map(({ sender, text: previousText }) => ({ sender, text: previousText }))
      const reply = await getAssistantReply(text, history)
      setMessages((current) => [...current, { sender: 'bot', text: reply }])
    } catch (error) {
      setMessages((current) => [...current, {
        sender: 'bot',
        text: error.message || 'I could not prepare a reply just now. Please try again.'
      }])
    } finally {
      setLoading(false)
    }
  }

  const submitMessage = (event) => {
    event.preventDefault()
    sendMessage()
  }

  return (
    <div className="chatbot-widget">
      {open && (
        <section className="chatbot-panel" role="dialog" aria-label="Dr.Plant AI chatbot">
          <header className="chatbot-header">
            <span className="chatbot-icon"><Bot size={18} /></span>
            <span className="chatbot-title">
              <strong>Dr.Plant AI</strong>
              <small>Plant care assistant</small>
            </span>
            <button className="chatbot-close" type="button" onClick={() => setOpen(false)} aria-label="Close chatbot">
              <X size={18} />
            </button>
          </header>

          <div className="chatbot-messages" role="log" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.sender}-${index}`} className={`chatbot-message ${message.sender}`}>
                {message.text}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="chatbot-suggestions" aria-label="Suggested questions">
                {suggestedQuestions.slice(0, 2).map((question) => (
                  <button key={question} type="button" onClick={() => sendMessage(question)}>
                    {question}
                  </button>
                ))}
              </div>
            )}

            {loading && <div className="chatbot-message bot typing">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-row" onSubmit={submitMessage}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about your plant..."
              aria-label="Message Dr.Plant AI"
            />
            <button type="submit" aria-label="Send message" disabled={loading || !input.trim()}>
              <Send size={17} />
            </button>
          </form>
        </section>
      )}

      <button
        className="chatbot-launcher"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  )
}