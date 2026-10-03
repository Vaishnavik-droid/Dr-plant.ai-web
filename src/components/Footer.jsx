import { Link } from 'react-router-dom'
import { Leaf, MessageCircleMore, Globe, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark"><Leaf size={18} /></span>
            <span>Dr.Plant AI</span>
          </div>
          <p className="muted">Your AI Plant Doctor</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/crops">Crops</Link></li>
            <li><Link to="/diseases">Diseases</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div>
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><Link to="/download">Download App</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/profile">Profile & location</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/weather">Weather</Link></li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
          <div className="social-row">
            <a href="#" aria-label="Community"><MessageCircleMore size={18} /></a>
            <a href="#" aria-label="Global"><Globe size={18} /></a>
            <a href="#" aria-label="Send"><Send size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
