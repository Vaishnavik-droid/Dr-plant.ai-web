import { SectionHeader } from '../components/SectionHeader'

export function About() {
  return (
    <div className="container page-shell">
      <SectionHeader eyebrow="About Dr.Plant AI" title="Helping growers act earlier and more confidently" description="Dr.Plant AI supports farmers and gardeners with practical crop insight, disease awareness, and plant-care recommendations." />

      <div className="detail-blocks">
        <div className="card">
          <h3>Mission</h3>
          <p>To make plant health guidance more accessible, practical, and actionable for every grower.</p>
        </div>
        <div className="card">
          <h3>How AI helps</h3>
          <p>AI can compare symptoms with crop patterns, highlight likely issues, and suggest follow-up checks and prevention steps.</p>
        </div>
        <div className="card">
          <h3>Vision</h3>
          <p>To build a trusted digital companion that supports healthier crop decisions across fields, gardens, and greenhouses.</p>
        </div>
      </div>
    </div>
  )
}
