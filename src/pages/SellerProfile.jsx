import { useState } from 'react'
import { locations } from '../data/marketplace'
import { getSellerProfile, saveSellerProfile } from '../data/sellerData'

export function SellerProfile() {
  const [profile, setProfile] = useState(getSellerProfile())
  const location = {
    state: profile?.state || profile?.location?.state || 'Maharashtra',
    district: profile?.district || profile?.location?.district || 'Pune',
    city: profile?.city || profile?.location?.city || 'Baramati',
    pin: profile?.pincode || profile?.location?.pin || '',
    ...(profile?.location || {})
  }

  const updateLocation = (key, value) => {
    const nextLocation = { ...location, [key]: value }

    if (key === 'state') {
      nextLocation.district = locations.districts[value]?.[0] || nextLocation.district
      nextLocation.city = locations.cities[nextLocation.district]?.[0] || ''
    }

    if (key === 'district') {
      nextLocation.city = locations.cities[value]?.[0] || ''
    }

    setProfile({
      ...profile,
      ...nextLocation,
      state: nextLocation.state,
      district: nextLocation.district,
      city: nextLocation.city,
      pincode: nextLocation.pin,
      location: nextLocation
    })
  }

  const save = (event) => {
    event.preventDefault()
    const nextProfile = {
      ...profile,
      ...location,
      state: location.state,
      district: location.district,
      city: location.city,
      pincode: location.pin,
      location: { ...location }
    }
    setProfile(nextProfile)
    saveSellerProfile(nextProfile)
    alert('Shop profile saved for this demo.')
  }

  return (
    <div className="seller-container">
      <div className="seller-page-heading">
        <div>
          <span className="eyebrow">Business settings</span>
          <h1>Shop Profile</h1>
          <p>Keep your public shop information ready for future buyer matching.</p>
        </div>
      </div>

      <form className="seller-panel seller-profile-form" onSubmit={save}>
        <div className="form-grid">
          <label>
            Owner name
            <input value={profile.owner_name || profile.full_name || ''} onChange={(e) => setProfile({ ...profile, owner_name: e.target.value, full_name: e.target.value })} />
          </label>

          <label>
            Shop name
            <input value={profile.shop_name || ''} onChange={(e) => setProfile({ ...profile, shop_name: e.target.value })} />
          </label>

          <label>
            Shop phone
            <input value={profile.phone || ''} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
          </label>

          <label>
            Address
            <input value={profile.address || ''} onChange={(e) => setProfile({ ...profile, address: e.target.value })} />
          </label>

          <label>
            State
            <select value={location.state} onChange={(e) => updateLocation('state', e.target.value)}>
              {locations.states.map((state) => <option key={state}>{state}</option>)}
            </select>
          </label>

          <label>
            District
            <select value={location.district} onChange={(e) => updateLocation('district', e.target.value)}>
              {(locations.districts[location.state] || []).map((district) => <option key={district}>{district}</option>)}
            </select>
          </label>

          <label>
            City / Village
            <select value={location.city} onChange={(e) => updateLocation('city', e.target.value)}>
              {(locations.cities[location.district] || ['Select city / village']).map((city) => <option key={city}>{city}</option>)}
            </select>
          </label>

          <label>
            PIN Code
            <input value={location.pin} onChange={(e) => updateLocation('pin', e.target.value.replace(/\D/g, '').slice(0, 6))} placeholder="413102" inputMode="numeric" />
          </label>
        </div>

        <button className="primary-btn" type="submit">Save profile</button>
      </form>
    </div>
  )
}
