import { ArrowRight, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CropCard({ crop }) {
  return (
    <article className="card crop-card">
      <img src={crop.image} alt={crop.name} className="card-image" />
      <div className="card-body">
        <div className="chip-row">
          <span className="chip">{crop.category}</span>
          <span className="chip muted-chip"><Sprout size={12} /> Healthy</span>
        </div>
        <h3>{crop.name}</h3>
        <p>{crop.description}</p>
        <div className="meta-row">
          <span>{crop.commonDiseases.length} diseases tracked</span>
          <Link to={`/crops/${crop.id}`} className="inline-link">
            View crop <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}
