import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart, Star } from 'lucide-react'
import { addToCart } from '../data/marketplace'

export function ProductCard({ product }) {
  const discount = Math.round((1 - product.price / product.mrp) * 100)

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="discount-badge">{discount}% off</span>
      </Link>
      <div className="product-card-body">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link>
        <div className="product-rating"><span><Star size={14} fill="currentColor" /> {product.rating}</span><small>({product.reviews})</small></div>
        <div className="product-price"><strong>₹{product.price}</strong><del>₹{product.mrp}</del></div>
        <p className="seller-line">{product.seller} · <MapPin size={12} /> {product.location}</p>
        <div className="product-actions">
          <button className="secondary-btn small-btn" type="button" onClick={() => addToCart(product)}><ShoppingCart size={15} /> Add to Cart</button>
          <Link className="primary-btn small-btn" to={`/product/${product.id}`}>Buy Now</Link>
        </div>
      </div>
    </article>
  )
}
