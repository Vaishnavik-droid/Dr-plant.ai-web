import { Link, useParams } from 'react-router-dom'
import { AlertTriangle, ArrowLeft } from 'lucide-react'
import { diseases } from '../data/diseases'

export function DiseaseDetails() {
  const { diseaseName } = useParams()
  const disease = diseases.find((item) => item.id === diseaseName) ?? diseases[0]

  return (
    <div className="container page-shell">
      <Link to="/diseases" className="secondary-btn small-btn back-link"><ArrowLeft size={15} /> Back to Diseases</Link>
      <div className="detail-hero card">
        <img src={disease.image} alt={disease.name} className="detail-image" />
        <div className="detail-copy">
          <span className="eyebrow">{disease.crop}</span>
          <h1>{disease.name}</h1>
          <p>{disease.summary}</p>
          {disease.imageCredit && (
            <small className="image-credit">
              Photo: <a href={disease.imageCredit.sourceUrl} target="_blank" rel="noreferrer">{disease.imageCredit.source}</a>
              {' · '}
              <a href={disease.imageCredit.licenseUrl} target="_blank" rel="noreferrer">{disease.imageCredit.license}</a>
            </small>
          )}
        </div>
      </div>

      <div className="detail-grid">
        <div className="card detail-panel">
          <h3>Symptoms</h3>
          <ul className="good-list">
            {disease.symptoms.map((symptom) => <li key={symptom}>{symptom}</li>)}
          </ul>
        </div>
        <div className="card detail-panel">
          <h3>Possible causes</h3>
          <ul className="good-list">
            {disease.causes.map((cause) => <li key={cause}>{cause}</li>)}
          </ul>
        </div>
      </div>

      <div className="detail-blocks">
        <div className="card">
          <h3>Treatment guidance</h3>
          <p>{disease.treatment}</p>
        </div>
        <div className="card">
          <h3>Prevention</h3>
          <ul className="good-list">
            {disease.prevention.map((tip) => <li key={tip}>{tip}</li>)}
          </ul>
        </div>
        <div className="card">
          <h3>Management tips</h3>
          <ul className="good-list">
            {disease.managementTips.map((tip) => <li key={tip}>{tip}</li>)}
          </ul>
        </div>
      </div>

      <div className="alert-box warning-box">
        <AlertTriangle size={16} />
        <span>Treatment recommendations should be verified with local agricultural experts and product labels before application.</span>
      </div>
    </div>
  )
}
