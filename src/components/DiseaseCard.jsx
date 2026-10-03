import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function DiseaseCard({ disease }) {
  return (
    <article className="card disease-card">
      <img src={disease.image} alt={disease.name} className="card-image" />
      <div className="card-body">
        <div className="chip-row">
          <span className="chip">{disease.crop}</span>
          <span className="chip muted-chip">{disease.type}</span>
        </div>
        {disease.imageCredit && (
          <small className="image-credit">
            Photo: <a href={disease.imageCredit.sourceUrl} target="_blank" rel="noreferrer">{disease.imageCredit.source}</a>
            {' · '}
            <a href={disease.imageCredit.licenseUrl} target="_blank" rel="noreferrer">{disease.imageCredit.license}</a>
          </small>
        )}
        <h3>{disease.name}</h3>
        <p>{disease.summary}</p>
        <div className="meta-row">
          <span>{disease.severity} risk</span>
          <Link to={`/diseases/${disease.id}`} className="inline-link">
            View details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}
