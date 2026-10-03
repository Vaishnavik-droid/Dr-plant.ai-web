import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, MapPin, Minus, Plus, ShoppingCart, Star, Truck } from 'lucide-react'
import { useState } from 'react'
import { addToCart, getProduct } from '../data/marketplace'

export function ProductDetails() {
  const { id } = useParams()
  const product = getProduct(id)
  const [quantity, setQuantity] = useState(1)
  if (!product) return <div className="container page-shell empty-state"><h1>Product not found</h1><Link to="/shop" className="primary-btn">Back to Shop</Link></div>
  const discount = Math.round((1 - product.price / product.mrp) * 100)
  const add = () => addToCart(product, quantity)
  return <div className="container page-shell product-detail-page"><Link to="/shop" className="back-link">← Back to Shop</Link><div className="product-detail-grid"><div className="product-detail-image"><img src={product.image} alt={product.name} /></div><div className="product-detail-copy"><span className="product-category">{product.category}</span><h1>{product.name}</h1><div className="detail-rating"><span><Star size={16} fill="currentColor" /> {product.rating}</span><span>{product.reviews} verified reviews</span></div><div className="detail-price"><strong>₹{product.price}</strong><del>₹{product.mrp}</del><span>{discount}% off</span></div><p className="detail-description">{product.description}</p><div className="seller-box"><strong>{product.seller}</strong><span><MapPin size={14} /> {product.location}</span></div><div className="availability"><CheckCircle2 size={18} /> {product.availability}</div><div className="quantity-row"><span>Quantity</span><div className="quantity-control"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={15} /></button><strong>{quantity}</strong><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus size={15} /></button></div></div><div className="detail-actions"><button className="secondary-btn" onClick={add}><ShoppingCart size={18} /> Add to Cart</button><Link className="primary-btn" to="/cart" onClick={add}>Buy Now</Link></div><div className="delivery-note"><Truck size={18} /><span>Delivery options are calculated from your saved district at checkout.</span></div></div></div><div className="product-info-columns"><section><h2>Usage information</h2><p>{product.usage}</p></section><section><h2>Availability & delivery</h2><p>{product.availability}. Availability is mock data for this frontend and can be replaced by a seller API.</p></section></div></div>
}
