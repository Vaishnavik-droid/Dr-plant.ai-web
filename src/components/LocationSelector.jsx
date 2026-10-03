import { useEffect, useState } from 'react'
import { LocateFixed, MapPin } from 'lucide-react'
import { getSavedLocation, locations, saveLocation } from '../data/marketplace'

export function LocationSelector({ compact = false }) {
  const [location, setLocation] = useState(getSavedLocation())
  const [message, setMessage] = useState('')

  useEffect(() => {
    const sync = () => setLocation(getSavedLocation())
    window.addEventListener('drPlantLocationUpdated', sync)
    return () => window.removeEventListener('drPlantLocationUpdated', sync)
  }, [])

  const update = (key, value) => {
    const next = { ...location, [key]: value }
    if (key === 'state') next.district = locations.districts[value]?.[0] || ''
    if (key === 'district') next.city = locations.cities[value]?.[0] || ''
    setLocation(next)
    saveLocation(next)
  }

  const useLocation = () => {
    if (!navigator.geolocation) { setMessage('Location is unavailable in this browser.'); return }
    navigator.geolocation.getCurrentPosition(() => setMessage('Exact location found. Showing shops around your saved district.'), () => setMessage('Permission was not granted. Choose your district instead.'))
  }

  return (
    <div className={`location-panel ${compact ? 'compact' : ''}`}>
      <div className="location-heading"><span className="location-icon"><MapPin size={18} /></span><div><strong>Deliver to / Shop near you</strong><small>Shopping near {location.city ? `${location.city}, ` : ''}{location.district || 'your district'}</small></div></div>
      <div className="location-fields">
        <label>State<select value={location.state} onChange={(event) => update('state', event.target.value)}>{locations.states.map((state) => <option key={state}>{state}</option>)}</select></label>
        <label>District<select value={location.district} onChange={(event) => update('district', event.target.value)}>{(locations.districts[location.state] || []).map((district) => <option key={district}>{district}</option>)}</select></label>
        <label>City / Village<select value={location.city} onChange={(event) => update('city', event.target.value)}>{(locations.cities[location.district] || [location.city || 'Select city']).map((city) => <option key={city}>{city}</option>)}</select></label>
        <label>PIN Code<input value={location.pin} onChange={(event) => update('pin', event.target.value.replace(/\D/g, '').slice(0, 6))} placeholder="411001" inputMode="numeric" /></label>
      </div>
      <button type="button" className="location-button" onClick={useLocation}><LocateFixed size={15} /> Use My Location</button>
      {message && <small className="location-message">{message}</small>}
    </div>
  )
}
