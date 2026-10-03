import { useState } from 'react'
import { SendHorizonal, Bot } from 'lucide-react'
import { getAssistantReply, suggestedQuestions } from '../services/aiService'

const initialMessages = [
  { sender: 'bot', text: 'Hi! I can help with crop stress, nutrient concerns, disease patterns, and watering advice.' }
]

export function Assistant() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMessage = { sender: 'user', text }
    const history = messages.map(({ sender, text: previousText }) => ({ sender, text: previousText }))
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const reply = await getAssistantReply(text, history)
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }])
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'bot', text: error.message || 'I could not prepare a reply. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container page-shell assistant-page">
      <div className="card assistant-chat">
        <div className="assistant-header chat-header">
          <div className="brand inline-brand">
            <span className="brand-mark"><Bot size={16} /></span>
            <span>Dr.Plant AI Assistant</span>
          </div>
        </div>

        <div className="suggested-row">
          {suggestedQuestions.map((question) => (
            <button key={question} type="button" className="chip-button" onClick={() => setInput(question)}>
              {question}
            </button>
          ))}
        </div>

        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={`${message.sender}-${index}`} className={`chat-message ${message.sender}`}>
              {message.text}
            </div>
          ))}
          {loading && <div className="chat-message bot typing">Typing...</div>}
        </div>

        <form className="chat-input-row" onSubmit={(event) => { event.preventDefault(); sendMessage() }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about your plant..."
            aria-label="Ask Dr.Plant AI assistant"
          />
          <button type="submit" className="primary-btn" disabled={loading || !input.trim()}>
            <SendHorizonal size={16} /> Send
          </button>
        </form>
      </div>
    </div>
  )
}
