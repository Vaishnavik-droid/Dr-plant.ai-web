import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { locations, defaultLocation } from '../data/marketplace'
import { sellerDefaultProfile } from '../data/sellerData'
import { signUp } from '../services/authService'

export function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    language: 'English',
    location: { ...defaultLocation },
    shop: {
      ...sellerDefaultProfile,
      shop_name: '',
      owner_name: '',
      phone: '',
      address: '',
      village: '',
      pincode: ''
    }
  })
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')
    setMessage('')
    if (!form.name || !form.email || !form.password || form.password !== form.confirmPassword) {
      setError('Enter your name and email, and make sure both passwords match.')
      return
    }

    const fullName = form.name.trim()
    const email = form.email.trim()
    const location = { ...form.location, city: form.location.city || form.shop.village || 'Baramati' }
    const shop = {
      ...form.shop,
      shop_name: form.shop.shop_name || `${fullName.split(' ')[0]} Agro Centre`,
      owner_name: fullName,
      email,
      phone: form.shop.phone || sellerDefaultProfile.phone,
      address: form.shop.address || `${location.city || 'Baramati'}, ${location.state || 'Maharashtra'}`,
      village: location.city || form.shop.village || 'Baramati',
      district: location.district || form.shop.district || 'Pune',
      state: location.state || form.shop.state || 'Maharashtra',
      pincode: location.pin || form.shop.pincode || sellerDefaultProfile.pincode
    }

    const profile = {
      ...shop,
      name: fullName,
      full_name: fullName,
      role: 'shop_owner',
      language: form.language,
      location,
      shop,
      is_verified_partner: false,
      subscription_active: true
    }

    try {
      setIsSubmitting(true)
      const result = await signUp(email, form.password, profile)
      if (result.hasSession) {
        navigate('/shop-owner/dashboard', { replace: true })
      } else {
        setMessage('Account created. Check your email to confirm it, then sign in.')
      }
    } catch (submitError) {
      setError(submitError.message || 'Unable to create your account. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container page-shell auth-shell">
      <form className="card auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">Register</span>
        <h1>Create shop account</h1>

        {error && <p role="alert">{error}</p>}
        {message && <p role="status">{message}</p>}

        <label>
          Name
          <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value, shop: { ...form.shop, owner_name: e.target.value } })} placeholder="Your full name" required />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value, shop: { ...form.shop, email: e.target.value } })} placeholder="you@example.com" required />
        </label>
        <label>
          Password
          <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Create password" required />
        </label>
        <label>
          Confirm password
          <input type="password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} placeholder="Repeat password" required />
        </label>
        <label>
          Preferred language
          <select value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value })}>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </select>
        </label>

        <fieldset className="location-form-fieldset">
          <legend>Shop location</legend>
          <div className="form-grid">
            <label>State<select value={form.location.state} onChange={(e) => setForm({
              ...form,
              location: { ...form.location, state: e.target.value, district: locations.districts[e.target.value]?.[0] || '', city: '' },
              shop: { ...form.shop, state: e.target.value, district: locations.districts[e.target.value]?.[0] || '' }
            })}>{locations.states.map((state) => <option key={state}>{state}</option>)}</select></label>
            <label>District<select value={form.location.district} onChange={(e) => setForm({
              ...form,
              location: { ...form.location, district: e.target.value, city: locations.cities[e.target.value]?.[0] || '' },
              shop: { ...form.shop, district: e.target.value, village: locations.cities[e.target.value]?.[0] || '' }
            })}>{(locations.districts[form.location.state] || []).map((district) => <option key={district}>{district}</option>)}</select></label>
            <label>City / Village<select value={form.location.city} onChange={(e) => setForm({
              ...form,
              location: { ...form.location, city: e.target.value },
              shop: { ...form.shop, village: e.target.value }
            })}>{(locations.cities[form.location.district] || ['Select city / village']).map((city) => <option key={city}>{city}</option>)}</select></label>
            <label>PIN Code<input value={form.location.pin} onChange={(e) => setForm({
              ...form,
              location: { ...form.location, pin: e.target.value.replace(/\D/g, '').slice(0, 6) },
              shop: { ...form.shop, pincode: e.target.value.replace(/\D/g, '').slice(0, 6) }
            })} placeholder="411001" inputMode="numeric" /></label>
          </div>
        </fieldset>

        <fieldset className="location-form-fieldset">
          <legend>Shop details</legend>
          <div className="form-grid">
            <label>Shop name<input value={form.shop.shop_name} onChange={(e) => setForm({ ...form, shop: { ...form.shop, shop_name: e.target.value } })} placeholder="Patil Agro Centre" /></label>
            <label>Shop phone<input value={form.shop.phone} onChange={(e) => setForm({ ...form, shop: { ...form.shop, phone: e.target.value } })} placeholder="9876543210" /></label>
            <label className="span-2">Address<input value={form.shop.address} onChange={(e) => setForm({ ...form, shop: { ...form.shop, address: e.target.value } })} placeholder="Main market road, nearby landmark" /></label>
          </div>
        </fieldset>

        <button className="primary-btn" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Creating account...' : 'Register'}</button>
        <div className="auth-links">
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  )
}
