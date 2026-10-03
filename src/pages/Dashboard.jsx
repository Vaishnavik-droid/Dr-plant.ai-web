import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Activity, Leaf, NotebookText } from 'lucide-react'
import { mockDiagnoses } from '../data/mockDiagnoses'

export function Dashboard() {
  const [diagnoses, setDiagnoses] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('drPlantSavedDiagnoses') || '[]')
    setDiagnoses(saved.length ? saved : mockDiagnoses.slice(0, 4))
  }, [])

  return (
    <div className="container page-shell">
      <div className="dashboard-header">
        <div>
          <span className="eyebrow">Farmer dashboard</span>
          <h1>Welcome back</h1>
        </div>
        <Link to="/plants" className="primary-btn">My Plants</Link>
      </div>

      <div className="stats-grid">
        <div className="card stat-card"><Activity size={18} /><div><span>Total diagnoses</span><strong>{diagnoses.length}</strong></div></div>
        <div className="card stat-card"><Leaf size={18} /><div><span>Saved plants</span><strong>12</strong></div></div>
        <div className="card stat-card"><NotebookText size={18} /><div><span>Recent reviews</span><strong>4</strong></div></div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Recent diagnoses</h3>
          <div className="diagnosis-table">
            {diagnoses.map((item) => (
              <div key={item.id} className="row-item">
                <div>
                  <strong>{item.crop}</strong>
                  <span>{item.disease}</span>
                </div>
                <span>{item.confidence}%</span>
                <span>{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>My plants</h3>
          <ul className="good-list">
            <li>Tomato · Healthy but watch leaf spots</li>
            <li>Chilli · Under stress after rain</li>
            <li>Potato · Needs disease scouting</li>
            <li>Wheat · Moderate stress alerts</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
