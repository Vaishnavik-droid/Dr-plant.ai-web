import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MapPin, UserRound } from 'lucide-react'
import { getProfile, getSavedLocation } from '../data/marketplace'
import { LocationSelector } from '../components/LocationSelector'

export function Profile() {
  const [profile, setProfile] = useState(getProfile())
  const [location, setLocation] = useState(getSavedLocation())

  useEffect(() => {
    const sync = () => { setProfile(getProfile()); setLocation(getSavedLocation()) }
    window.addEventListener('drPlantLocationUpdated', sync)
    return () => window.removeEventListener('drPlantLocationUpdated', sync)
  }, [])

  if (!profile) return <div className="container page-shell empty-state"><UserRound size={40} /><h1>Create your grower profile</h1><p>Register to save a shopping location and see nearby agricultural listings.</p><Link to="/register" className="primary-btn">Create account</Link></div>

  return <div className="container page-shell profile-page">
    <div className="page-intro"><span className="eyebrow">Account</span><h1>Your profile</h1><p>Keep your personal marketplace details and shopping location up to date.</p></div>
    <div className="profile-layout">
      <section className="profile-card"><div className="profile-avatar"><UserRound size={24} /></div><h2>{profile.name || 'Dr.PlantAI grower'}</h2><p>{profile.email}</p><div className="profile-location"><MapPin size={17} /><div><strong>{location.city}, {location.district}</strong><span>{location.state} · {location.pin || 'PIN not added'}</span></div></div><Link to="/orders" className="secondary-btn">View orders</Link></section>
      <section><div className="section-head-row profile-section-heading"><div><span className="eyebrow">Saved marketplace location</span><h2>Edit Location</h2><p>District and city are used first for shop and product matching. GPS is optional.</p></div></div><LocationSelector /></section>
    </div>
  </div>
}
