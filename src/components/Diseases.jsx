import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { diseases, diseaseFilterOptions } from '../data/diseases'
import { DiseaseCard } from './DiseaseCard'
import { SectionHeader } from './SectionHeader'

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
