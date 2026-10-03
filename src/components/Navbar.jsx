import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Leaf, Download, ShoppingCart, MapPin, Moon, Sun } from 'lucide-react'
import { LanguageSelector } from './LanguageSelector'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Crops', to: '/crops' },
  { label: 'Diseases', to: '/diseases' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' }
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('drPlantTheme') === 'dark')

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    localStorage.setItem('drPlantTheme', theme)
  }, [darkMode])

  const toggleTheme = () => setDarkMode((current) => !current)
  const themeAction = darkMode ? 'Switch to day mode' : 'Switch to dark mode'

  return (
    <header className="topbar">
      <nav className="navbar container" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label="Dr.Plant AI home">
          <span className="brand-mark"><Leaf size={18} /></span>
          <span>Dr.Plant AI</span>
        </Link>

        <div className="nav-links desktop-only" role="menubar">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <LanguageSelector className="desktop-language-selector" />
          <Link to="/shop#location" className="location-nav-link"><MapPin size={16} /><span>Location</span></Link>
          <Link to="/download" className="primary-btn small-btn">
            <Download size={16} />
            Download App
          </Link>
          <Link to="/cart" className="cart-link" aria-label="Open cart"><ShoppingCart size={18} /></Link>
          <button className="theme-toggle desktop-theme-toggle" type="button" onClick={toggleTheme} aria-label={themeAction} title={themeAction}>
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link to="/login" className="secondary-btn small-btn">
            Login
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu container">
          <LanguageSelector />
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <button className="theme-toggle mobile-theme-toggle" type="button" onClick={toggleTheme}>
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            <span>{themeAction}</span>
          </button>
        </div>
      )}
    </header>
  )
}
