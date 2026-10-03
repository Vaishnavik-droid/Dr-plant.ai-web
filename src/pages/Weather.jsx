import { useEffect, useState } from 'react'
import { CloudRain, MapPin, Thermometer, Wind } from 'lucide-react'
import { getWeatherSummary } from '../services/weatherService'

export function Weather() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeatherSummary('Nagpur').then((data) => setWeather(data))
  }, [])

  if (!weather) return <div className="container page-shell loading-card">Loading weather insight...</div>

  return (
    <div className="container page-shell">
      <div className="weather-header">
        <div>
          <span className="eyebrow">Weather overview</span>
          <h1>{weather.location}</h1>
        </div>
      </div>

      <div className="weather-panel card">
        <div className="weather-main">
          <div className="weather-stat"><Thermometer size={18} /><span>Temperature</span><strong>{weather.temperature}°C</strong></div>
          <div className="weather-stat"><CloudRain size={18} /><span>Humidity</span><strong>{weather.humidity}%</strong></div>
          <div className="weather-stat"><Wind size={18} /><span>Wind</span><strong>{weather.wind} km/h</strong></div>
          <div className="weather-stat"><MapPin size={18} /><span>Condition</span><strong>{weather.condition}</strong></div>
        </div>

        <div className="weather-alert big-alert">
          <span>Rain probability: {weather.rainProbability}%</span>
          <p>{weather.insight}</p>
        </div>
      </div>
    </div>
  )
}
