import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getCart, getSavedLocation, saveCart } from '../data/marketplace'

export function Cart() {
  const [cart, setCart] = useState(getCart())
  const [location] = useState(getSavedLocation())
  useEffect(() => { const sync = () => setCart(getCart()); window.addEventListener('drPlantCartUpdated', sync); return () => window.removeEventListener('drPlantCartUpdated', sync) }, [])
  const updateQuantity = (id, amount) => { const next = cart.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item); setCart(next); saveCart(next) }
  const remove = (id) => { const next = cart.filter((item) => item.id !== id); setCart(next); saveCart(next) }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  if (!cart.length) return <div className="container page-shell empty-state"><ShoppingBag size={42} /><h1>Your cart is ready for good things</h1><p>Add useful products for your next growing season.</p><Link to="/shop" className="primary-btn">Browse Shop</Link></div>
  return <div className="container page-shell cart-page"><div className="page-intro"><span className="eyebrow">Your basket</span><h1>Cart</h1><p>Review products before you choose a delivery address.</p></div><div className="cart-layout"><div className="cart-items">{cart.map((item) => <article className="cart-item" key={item.id}><img src={item.image} alt={item.name} /><div className="cart-item-copy"><span className="product-category">{item.category}</span><h3>{item.name}</h3><p>{item.seller}</p><div className="quantity-control"><button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity"><Minus size={14} /></button><strong>{item.quantity}</strong><button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity"><Plus size={14} /></button></div></div><strong className="cart-item-price">₹{item.price * item.quantity}</strong><button className="remove-button" onClick={() => remove(item.id)} aria-label={`Remove ${item.name}`}><Trash2 size={17} /></button></article>)}</div><aside className="order-summary"><span className="eyebrow">Order summary</span><h2>Ready to grow</h2><div className="summary-line"><span>Product total</span><strong>₹{total}</strong></div><div className="summary-line"><span>Delivery</span><strong>Calculated at checkout</strong></div><div className="saved-location"><span>Delivering near</span><strong>{location.district}, {location.state}</strong></div><Link to="/checkout" className="primary-btn full-btn">Proceed to Checkout</Link></aside></div></div>
}
