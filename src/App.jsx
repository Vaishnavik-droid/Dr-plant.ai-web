import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Crops } from './pages/Crops'
import { CropDetails } from './pages/CropDetails'
import { Diseases } from './pages/Diseases'
import { DiseaseDetails } from './pages/DiseaseDetails'
import { Assistant } from './pages/Assistant'
import { Dashboard } from './pages/Dashboard'
import { Plants } from './pages/Plants'
import { Weather } from './pages/Weather'
import { Download } from './pages/Download'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { ForgotPassword } from './pages/ForgotPassword'
import { Shop } from './pages/Shop'
import { ProductDetails } from './pages/ProductDetails'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import { Orders } from './pages/Orders'
import { Profile } from './pages/Profile'
import { SellerDashboard } from './pages/SellerDashboard'
import { SellerRequests } from './pages/SellerRequests'
import { SellerOrders } from './pages/SellerOrders'
import { SellerProducts } from './pages/SellerProducts'
import { SellerProfile } from './pages/SellerProfile'
import { SellerSettings } from './pages/SellerSettings'
import { RoleGuard } from './components/RoleGuard'
import { SellerLayout } from './components/SellerLayout'
import { ChatbotWidget } from './components/ChatbotWidget'
import { getCurrentProfile } from './services/authService'

function AppRoutes() {
  const location = useLocation()
  const isSellerRoute = location.pathname.startsWith('/shop-owner')
  const profile = getCurrentProfile()
  const publicPaths = ['/login', '/register', '/forgot-password', '/', '/about', '/crops', '/diseases', '/shop', '/product', '/cart', '/checkout', '/download']
  const isPublicRoute = publicPaths.includes(location.pathname) || location.pathname.startsWith('/product/') || location.pathname.startsWith('/diseases/') || location.pathname.startsWith('/crops/')
  const role = profile?.role

  if (profile && ['/login', '/register', '/forgot-password'].includes(location.pathname)) {
    if (role === 'shop_owner' || role === 'seller') return <Navigate to="/shop-owner/dashboard" replace />
  }

  if (!profile && !isPublicRoute) return <Navigate to="/login" replace />
  if ((role === 'seller' || role === 'shop_owner') && !isSellerRoute && !isPublicRoute) return <Navigate to="/shop-owner/dashboard" replace />
  if (role === 'admin' && !isPublicRoute) return <Navigate to="/login" replace />

  const routes = <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/crops" element={<Crops />} />
    <Route path="/crops/:cropName" element={<CropDetails />} />
    <Route path="/diseases" element={<Diseases />} />
    <Route path="/diseases/:diseaseName" element={<DiseaseDetails />} />
    <Route path="/assistant" element={<Assistant />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/plants" element={<Plants />} />
    <Route path="/weather" element={<Weather />} />
    <Route path="/download" element={<Download />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/shop-owner/dashboard" element={<RoleGuard role="shop_owner"><SellerDashboard /></RoleGuard>} />
    <Route path="/shop-owner/requests" element={<RoleGuard role="shop_owner"><SellerRequests /></RoleGuard>} />
    <Route path="/shop-owner/orders" element={<RoleGuard role="shop_owner"><SellerOrders /></RoleGuard>} />
    <Route path="/shop-owner/products" element={<RoleGuard role="shop_owner"><SellerProducts /></RoleGuard>} />
    <Route path="/shop-owner/profile" element={<RoleGuard role="shop_owner"><SellerProfile /></RoleGuard>} />
    <Route path="/shop-owner/settings" element={<RoleGuard role="shop_owner"><SellerSettings /></RoleGuard>} />
  </Routes>
  const page = isSellerRoute
    ? <SellerLayout>{routes}</SellerLayout>
    : <div className="app-shell"><Navbar /><main className="page-content">{routes}</main><Footer /></div>

  return <>{page}{location.pathname !== '/assistant' && <ChatbotWidget />}</>
}

function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}

export default App
