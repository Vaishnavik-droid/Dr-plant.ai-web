import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Droplets, Leaf, Sprout, ShieldAlert } from 'lucide-react'
import { crops } from '../data/crops'

export function CropDetails() {
  const { cropName } = useParams()
  const crop = crops.find((item) => item.id === cropName) ?? crops[0]

  return (
    <div className="container page-shell">
      <Link to="/crops" className="secondary-btn small-btn back-link"><ArrowLeft size={15} /> Back to Crops</Link>
      <div className="detail-hero card">
        <img src={crop.image} alt={crop.name} className="detail-image" />
        <div className="detail-copy">
          <span className="eyebrow">{crop.category}</span>
          <h1>{crop.name}</h1>
          <p>{crop.description}</p>
          <Link to="/diagnose" className="primary-btn">Diagnose this crop</Link>
        </div>
      </div>

      <div className="detail-grid">
        <div className="card detail-panel">
          <h3><Leaf size={18} /> Growing conditions</h3>
          <p>{crop.growingConditions}</p>
        </div>
        <div className="card detail-panel">
          <h3><Sprout size={18} /> Soil requirements</h3>
          <p>{crop.soilRequirements}</p>
        </div>
        <div className="card detail-panel">
          <h3><Droplets size={18} /> Water requirements</h3>
          <p>{crop.waterRequirements}</p>
        </div>
      </div>

      <div className="detail-blocks">
        <div className="card">
          <h3>Common diseases</h3>
          <ul className="good-list">
            {crop.commonDiseases.map((disease) => <li key={disease}>{disease}</li>)}
          </ul>
        </div>
        <div className="card">
          <h3>Common pests</h3>
          <ul className="good-list">
            {crop.commonPests.map((pest) => <li key={pest}>{pest}</li>)}
          </ul>
        </div>
        <div className="card">
          <h3>Plant-care guidance</h3>
          <ul className="good-list">
            {crop.careTips.map((tip) => <li key={tip}>{tip}</li>)}
          </ul>
        </div>
      </div>

      <div className="alert-box">
        <ShieldAlert size={16} />
        <span>Recommended practices should be confirmed with local agronomy guidance and product labels.</span>
      </div>
    </div>
  )
}
