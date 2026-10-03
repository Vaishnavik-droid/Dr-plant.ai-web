import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendPasswordReset, signOut, updatePassword } from '../services/authService'

export function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isResetting, setIsResetting] = useState(() => window.location.hash.includes('type=recovery') || new URLSearchParams(window.location.search).has('code'))
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    let subscription
    let isCancelled = false

    import('../services/supabaseClient').then(({ supabase }) => {
      if (isCancelled) return
      const { data } = supabase.auth.onAuthStateChange((event) => {
        if (event === 'PASSWORD_RECOVERY') setIsResetting(true)
      })
      subscription = data.subscription
    })

    return () => {
      isCancelled = true
      subscription?.unsubscribe()
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setMessage('')
    setIsSubmitting(true)

    try {
      if (isResetting) {
        await updatePassword(password)
        await signOut()
        navigate('/login', { replace: true })
        return
      }

      await sendPasswordReset(email)
      setMessage('If an account exists for that email, a password reset link will arrive shortly.')
    } catch (submitError) {
      setError(submitError.message || 'Unable to process your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container page-shell auth-shell">
      <form className="card auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">Reset password</span>
        <h1>{isResetting ? 'Choose a new password' : 'Forgot password?'}</h1>
        {error && <p role="alert">{error}</p>}
        {message && <p role="status">{message}</p>}
        {isResetting ? (
          <label>
            New password
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={6} required />
          </label>
        ) : (
          <label>
            Email address
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required />
          </label>
        )}
        <button type="submit" className="primary-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Please wait...' : isResetting ? 'Update password' : 'Send reset link'}
        </button>
      </form>
    </div>
  )
}
