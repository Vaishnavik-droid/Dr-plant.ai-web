import { Link, useParams } from 'react-router-dom'
import { MessageSquareText, Save, Share2, Printer, ShieldAlert, CheckCircle2 } from 'lucide-react'
import { mockDiagnoses } from '../data/mockDiagnoses'

export function DiagnosisResultPage() {
  const { id } = useParams()
  const diagnosis = mockDiagnoses.find((item) => item.id === id) ?? mockDiagnoses[0]

  return (
    <div className="container page-shell">
      <div className="result-header">
        <div>
          <span className="eyebrow">Diagnosis result</span>
          <h1>{diagnosis.crop}</h1>
        </div>
        <div className="result-actions">
          <button className="secondary-btn small-btn"><Save size={15} /> Save</button>
          <button className="secondary-btn small-btn"><Share2 size={15} /> Share</button>
          <button className="secondary-btn small-btn"><Printer size={15} /> Print</button>
        </div>
      </div>

      <div className="result-grid">
        <div className="card result-visual">
          <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80" alt="Plant disease example" />
          <div className="result-metrics">
            <div><span>Possible disease</span><strong>{diagnosis.disease}</strong></div>
            <div><span>AI confidence</span><strong>{diagnosis.confidence}%</strong></div>
            <div><span>Status</span><strong>{diagnosis.status}</strong></div>
          </div>
        </div>

        <div className="card result-body">
          <div className="result-status success-box"><CheckCircle2 size={18} /> Possible diagnosis</div>
          <div className="info-block">
            <h3>Symptoms</h3>
            <ul>
              {diagnosis.symptoms.map((symptom) => <li key={symptom}>{symptom}</li>)}
            </ul>
          </div>
          <div className="info-block">
            <h3>Treatment guidance</h3>
            <p>{diagnosis.treatment}</p>
          </div>
          <div className="info-block">
            <h3>Prevention</h3>
            <p>{diagnosis.prevention}</p>
          </div>
          <div className="info-block">
            <h3>Plant care tips</h3>
            <ul>
              <li>Use balanced irrigation to avoid water stress.</li>
              <li>Improve air movement around dense foliage.</li>
              <li>Inspect crops regularly after rain or high humidity.</li>
            </ul>
          </div>
          <div className="alert-box">
            <ShieldAlert size={16} />
            <span>Not sure about this result? Ask Dr.Plant AI for a second opinion.</span>
          </div>
          <Link to="/assistant" className="primary-btn"><MessageSquareText size={16} /> Ask Dr.Plant AI</Link>
        </div>
      </div>
    </div>
  )
}
