import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Leaf, ShieldCheck, Sprout, TrendingUp } from 'lucide-react'
import { signIn } from '../services/authService'

export function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError('')
      setIsSubmitting(true)
      await signIn(form.email, form.password)
      navigate('/shop-owner/dashboard', { replace: true })
    } catch (submitError) {
      setError(submitError.message || 'Unable to sign in. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="login-page">
      <div className="login-shell">
        <aside className="login-visual">
          <div className="login-badge"><Leaf size={16} /> Dr.PlantAI</div>
          <h1>Grow smarter with a healthier field.</h1>
          <p>
            Support farmers with crop intelligence, product discovery, and local agri insights in one easy workflow.
          </p>

          <div className="login-highlight-grid">
            <div className="login-stat-card">
              <Sprout size={18} />
              <div>
                <strong>12k+</strong>
                <span>Active growers</span>
              </div>
            </div>
            <div className="login-stat-card">
              <TrendingUp size={18} />
              <div>
                <strong>94%</strong>
                <span>Issue resolution</span>
              </div>
            </div>
          </div>

          <ul className="login-points">
            <li><ShieldCheck size={16} /> Verified crop guidance</li>
            <li><ShieldCheck size={16} /> Shop owner dashboard access</li>
            <li><ShieldCheck size={16} /> Fast local recommendations</li>
          </ul>
        </aside>

        <div className="login-form-side">
          <form className="card auth-card login-card" onSubmit={handleSubmit}>
            <div className="login-brand"><span className="login-brand-mark"><Leaf size={17} /></span><span>Dr.PlantAI</span></div>
            <div>
              <h2>Welcome back</h2>
              <p className="login-subtitle">Sign in to continue to your workspace</p>
            </div>

            {error && <p role="alert">{error}</p>}

            <label>
              Email
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required />
            </label>

            <label>
              Password
              <span className="password-field">
                <input type={showPassword ? 'text' : 'password'} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Enter your password" required />
                <button type="button" className="password-toggle" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </span>
            </label>

            <button className="primary-btn login-submit" type="submit">
              {isSubmitting ? 'Signing in...' : 'Login'}
              <ArrowRight size={17} />
            </button>

            <div className="auth-links">
              <Link to="/register">Create account</Link>
              <Link to="/forgot-password">Forgot password</Link>
            </div>

            <p className="login-helper">Your account details stay protected and are used only to personalize your crop support experience.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
