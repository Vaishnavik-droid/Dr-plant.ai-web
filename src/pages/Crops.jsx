import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'
import { crops, cropFilterOptions } from '../data/crops'
import { CropCard } from '../components/CropCard'
import { SectionHeader } from '../components/SectionHeader'

export function Crops() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    return crops.filter((crop) => {
      const matchesQuery = crop.name.toLowerCase().includes(query.toLowerCase())
      const matchesFilter = filter === 'All' || crop.category === filter ||
        (filter === 'Cereals' && crop.category === 'Cereal') ||
        (filter === 'Vegetables' && crop.category === 'Vegetable') ||
        (filter === 'Fruits' && crop.category === 'Fruit') ||
        (filter === 'Cash Crops' && crop.category === 'Cash Crop') ||
        (filter === 'Pulses' && crop.category === 'Pulse')

      return matchesQuery && matchesFilter
    })
  }, [query, filter])

  return (
    <div className="container page-shell">
      <Link to="/" className="secondary-btn small-btn back-link"><ArrowLeft size={15} /> Back to Home</Link>
      <SectionHeader eyebrow="Crop library" title="Healthy Crops" description="Explore healthy crop varieties and their growing conditions and care guidance." />

      <div className="toolbar">
        <label className="search-box">
          <Search size={16} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search crops" aria-label="Search crops" />
        </label>

        <div className="filter-row">
          {cropFilterOptions.map((option) => (
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

      <div className="grid-3">
        {filtered.map((crop) => <CropCard key={crop.id} crop={crop} />)}
      </div>
    </div>
  )
}
