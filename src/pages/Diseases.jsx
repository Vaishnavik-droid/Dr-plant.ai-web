import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'
import { diseases, diseaseFilterOptions } from '../data/diseases'
import { DiseaseCard } from '../components/DiseaseCard'
import { SectionHeader } from '../components/SectionHeader'

export function Diseases() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    return diseases.filter((disease) => {
      const matchesQuery = disease.name.toLowerCase().includes(query.toLowerCase()) || disease.crop.toLowerCase().includes(query.toLowerCase())
      const matchesFilter = filter === 'All' || disease.type === filter
      return matchesQuery && matchesFilter
    })
  }, [query, filter])

  return (
    <div className="container page-shell">
      <Link to="/" className="secondary-btn small-btn back-link"><ArrowLeft size={15} /> Back to Home</Link>
      <SectionHeader eyebrow="Plant disease library" title="Plant Disease Library" description="Search disease patterns by crop, type, and identifier cues." />

      <div className="toolbar">
        <label className="search-box">
          <Search size={16} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search diseases" aria-label="Search diseases" />
        </label>

        <div className="filter-row">
          {diseaseFilterOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`filter-btn ${filter === option ? 'active' : ''}`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-4">
        {filtered.map((disease) => <DiseaseCard key={disease.id} disease={disease} />)}
      </div>
    </div>
  )
}
