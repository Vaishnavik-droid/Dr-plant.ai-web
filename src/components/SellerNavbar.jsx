import { Link, NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, LogOut, Menu, Package, ShieldCheck, ShoppingBasket, Store, UserRound, X } from 'lucide-react'
import { useState } from 'react'
import { LanguageSelector } from './LanguageSelector'
import { signOut } from '../services/authService'

const links = [
  { label: 'Dashboard', to: '/shop-owner/dashboard', icon: LayoutDashboard },
  { label: 'Orders', to: '/shop-owner/orders', icon: Package },
  { label: 'Products', to: '/shop-owner/products', icon: Store },
  { label: 'Shop Profile', to: '/shop-owner/profile', icon: UserRound },
  { label: 'Settings', to: '/shop-owner/settings', icon: ShieldCheck }
]

export function SellerNavbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await signOut()
    } finally {
      localStorage.removeItem('drPlantShopProfile')
      navigate('/login')
    }
  }

  return (
    <header className="seller-topbar">
      <div className="seller-nav container">
        <Link to="/shop-owner/dashboard" className="brand">
          <span className="brand-mark"><Store size={17} /></span>
          <span>Dr.Plant AI <small>Seller</small></span>
        </Link>
        <button className="seller-menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle seller navigation">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className={open ? 'seller-links open' : 'seller-links'}>
          <LanguageSelector className="seller-language-selector" />
          {links.map(({ label, to, icon: Icon }) => (
            <NavLink onClick={() => setOpen(false)} key={to} to={to} className={({ isActive }) => isActive ? 'seller-link active' : 'seller-link'}>
              <Icon size={17} />{label}
            </NavLink>
          ))}
          <button className="seller-link logout-link" onClick={logout}><LogOut size={17} />Logout</button>
        </nav>
      </div>
    </header>
  )
}
