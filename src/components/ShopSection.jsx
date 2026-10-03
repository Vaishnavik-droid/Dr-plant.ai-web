import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Star } from 'lucide-react'
import { getSavedLocation, products, shops } from '../data/marketplace'
import { ProductCard } from './ProductCard'
import { SectionHeader } from './SectionHeader'

export function ShopSection({ compact = false }) {
  const location = getSavedLocation()
  const localProducts = [...products].sort((a, b) => Number(b.location.includes(location.district)) - Number(a.location.includes(location.district)))
  const localShops = [...shops].sort((a, b) => Number(b.area.includes(location.district)) - Number(a.area.includes(location.district)))
  return <>
    <section className="container section-space product-section"><div className="section-head-row"><SectionHeader eyebrow="Field essentials" title="Popular products" description="Useful inputs, tools, and plant-care products for your next growing decision." /><Link to="/shop" className="secondary-btn">Browse marketplace <ArrowRight size={16} /></Link></div><div className="product-grid">{localProducts.slice(0, compact ? 4 : 8).map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
    <section className="container section-space shop-near-section">
      <div className="section-head-row"><SectionHeader eyebrow="Local marketplace" title="Nearby agricultural shops" description="Browse trusted mock listings matched to your district. Real seller and inventory integrations can plug into this structure later." /><Link to="/shop" className="secondary-btn">Shop Now <ArrowRight size={16} /></Link></div>
      <div className="shop-list">{localShops.slice(0, compact ? 3 : localShops.length).map((shop) => <article className="shop-card" key={shop.id}><div className="shop-avatar"><MapPin size={22} /></div><div className="shop-card-copy"><span className="product-category">{shop.type}</span><h3>{shop.name}</h3><p>{shop.area} · {shop.distance}</p><div className="shop-meta"><span><Star size={14} fill="currentColor" /> {shop.rating}</span><span>{shop.products} products</span></div></div><Link to="/shop" className="icon-link" aria-label={`View ${shop.name}`}><ArrowRight size={18} /></Link></article>)}</div>
    </section>
  </>
}
