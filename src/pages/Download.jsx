import { Download as DownloadIcon, Smartphone, WifiOff, Leaf, ShieldCheck, History } from 'lucide-react'

const APP_DOWNLOAD_URL = 'https://github.com/sadhanakoravi022/Dr.-Plant-AI/actions/runs/37170875297/artifacts/11291466898'
const HAS_VALID_DOWNLOAD_URL = (() => {
  if (!APP_DOWNLOAD_URL) return false

  try {
    const parsedUrl = new URL(APP_DOWNLOAD_URL)
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:'
  } catch {
    return false
  }
})()

export function Download() {
  return (
    <div className="container page-shell download-page">
      <div className="download-copy">
        <span className="eyebrow">Android app</span>
        <h1>Take plant intelligence with you wherever you farm.</h1>
        <p className="download-lead">Take plant intelligence with you wherever you farm.</p>
        <p className="muted">The Android app download will become active as soon as the signed APK is published. This page intentionally does not create a fake download.</p>
        <ul className="good-list">
          <li><Leaf size={18} /> Plant knowledge and crop guidance</li>
          <li><WifiOff size={18} /> Offline-first support for field moments</li>
          <li><ShieldCheck size={18} /> Practical plant-care recommendations</li>
          <li><History size={18} /> Save useful notes for later</li>
        </ul>
        <div className="cta-row">
          {HAS_VALID_DOWNLOAD_URL ? (
            <a href={APP_DOWNLOAD_URL} className="primary-btn" target="_blank" rel="noopener noreferrer" download>
              <DownloadIcon size={16} /> Download APK
            </a>
          ) : (
            <button className="primary-btn disabled-btn" type="button" disabled>
              <DownloadIcon size={16} /> APK coming soon
            </button>
          )}
        </div>
        <small className="download-note">
          {HAS_VALID_DOWNLOAD_URL
            ? 'APK download link is ready.'
            : 'The APK URL is invalid or missing. Add a real https://...apk file link in .env as VITE_APP_DOWNLOAD_URL.'}
        </small>
      </div>

      <div className="device-mockup card big-device">
        <div className="phone-frame">
          <div className="phone-screen">
            <div className="mini-header"><Smartphone size={16} /> App preview</div>
            <div className="mini-card"><span>Tomato</span><strong>Healthy</strong></div>
            <div className="mini-stat"><span>Recommendation</span><strong>Improve airflow</strong></div>
          </div>
        </div>
      </div>
    </div>
  )
}
