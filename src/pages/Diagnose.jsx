import { useState } from 'react'
import { motion } from 'framer-motion'
import { UploadCloud, Activity, Save, RefreshCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { UploadBox } from '../components/UploadBox'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'

export function Diagnose() {
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFileSelect = (event) => {
    const selected = event.target.files?.[0]
    if (!selected) return

    setFile(selected)
    const imageUrl = URL.createObjectURL(selected)
    setPreview(imageUrl)
  }

  const handleAnalyze = async () => {
    if (!preview) return

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2200))
    setLoading(false)
    navigate('/diagnosis/diag-demo')
  }

  return (
    <div className="container page-shell">
      <SectionHeader eyebrow="Plant diagnosis" title="Diagnose Your Plant" description="Upload a clear photo of the affected plant or leaf for AI-based plant health analysis." />

      <div className="diagnose-layout">
        <div className="card upload-panel">
          <UploadBox onChange={handleFileSelect} preview={preview} onRemove={() => setPreview('')} loading={loading} />

          <div className="upload-meta">
            <span>Supported formats: JPG, JPEG, PNG</span>
          </div>

          <div className="diagnose-actions">
            <Button onClick={handleAnalyze} disabled={!preview || loading} className="primary-btn">
              {loading ? <><Activity size={16} className="spin" /> Analyzing Plant</> : <><UploadCloud size={16} /> Analyze Plant</>}
            </Button>
            <button className="secondary-btn" type="button" onClick={() => setPreview('')}>
              <RefreshCcw size={15} /> Restart
            </button>
          </div>
        </div>

        <motion.div className="card diag-summary" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }}>
          <h3>What to include</h3>
          <ul className="good-list">
            <li>Clear top-down image of the leaf or plant</li>
            <li>Picture of both healthy and affected areas if possible</li>
            <li>Well-lit photo without heavy blur</li>
          </ul>

          <div className="mini-insight">
            <Save size={16} />
            <span>Results can be saved to your dashboard for later review.</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
