export function SectionHeader({ eyebrow, title, description, align = 'left', headingId }) {
  return (
    <div className={`section-header ${align === 'center' ? 'centered' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={headingId}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
