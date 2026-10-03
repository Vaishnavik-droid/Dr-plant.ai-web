import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal } from 'lucide-react'
import { categories, getSavedLocation, products } from '../data/marketplace'
import { LocationSelector } from '../components/LocationSelector'
import { ProductCard } from '../components/ProductCard'
import { ShopSection } from '../components/ShopSection'

export function Shop() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [sort, setSort] = useState('featured')
  const [maxPrice, setMaxPrice] = useState(1000)
  const location = getSavedLocation()
  const filtered = useMemo(() => products.filter((product) => (category === 'All' || product.category === category) && product.price <= maxPrice && `${product.name} ${product.category} ${product.seller}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => {
    const aLocal = a.location.includes(location.district) ? 1 : 0
    const bLocal = b.location.includes(location.district) ? 1 : 0
    if (aLocal !== bLocal) return bLocal - aLocal
    return sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : b.rating - a.rating
  }), [query, category, sort, maxPrice, location.district])

  return <div className="container page-shell shop-page">
    <div className="shop-hero"><div><span className="eyebrow">Local agricultural marketplace</span><h1>Good inputs, closer to home.</h1><p>Find seeds, nutrition, tools, and crop care products from shops matched to your district.</p></div><div className="shop-hero-note"><span>Shop with context</span><strong>District-first delivery</strong><small>Mock catalogue for frontend development</small></div></div>
    <LocationSelector />
    <div className="shop-layout">
      <aside className="shop-filters"><div className="filter-heading"><SlidersHorizontal size={18} /><strong>Filter products</strong></div><div className="filter-group"><span>Categories</span><button className={category === 'All' ? 'filter-chip active' : 'filter-chip'} onClick={() => setCategory('All')}>All products</button>{categories.map((item) => <button key={item} className={category === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="filter-group"><span>Price up to ₹{maxPrice}</span><input type="range" min="100" max="1000" step="50" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} /></div></aside>
      <main className="shop-results"><div className="shop-toolbar"><label className="search-field"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search seeds, fertilizers, plant care products..." /></label><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products"><option value="featured">Sort: Featured</option><option value="low">Price: Low to high</option><option value="high">Price: High to low</option></select></div><p className="result-count">{filtered.length} products · local listings first for {location.district}</p>{filtered.length ? <div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><h3>No products match this filter</h3><p>Try another category or raise the price limit.</p></div>}</main>
    </div>
    <ShopSection compact />
  </div>
}
