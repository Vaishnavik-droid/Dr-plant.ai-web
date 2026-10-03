import { Link } from 'react-router-dom'
import { Check, Clock3, Package, ShoppingBasket, Store, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getSellerProducts, getSellerRequests, saveSellerOrders, saveSellerRequests, getSellerOrders } from '../data/sellerData'
import { getSellerProfile } from '../data/sellerData'

const statLabels = [
  { key: 'pending', label: 'New Buyer Requests', icon: ShoppingBasket },
  { key: 'pendingOrders', label: 'Pending Orders', icon: Clock3 },
  { key: 'confirmed', label: 'Confirmed Orders', icon: Check },
  { key: 'completed', label: 'Completed Orders', icon: Package }
]

export function SellerDashboard() {
  const [requests, setRequests] = useState(getSellerRequests())
  const [products] = useState(getSellerProducts())
  const profile = getSellerProfile()
  const shopName = profile?.shop_name || profile?.shopName || 'Patil Agro Centre'

  const refresh = () => setRequests(getSellerRequests())

  useEffect(() => {
    window.addEventListener('drPlantRequestsUpdated', refresh)
    return () => window.removeEventListener('drPlantRequestsUpdated', refresh)
  }, [])

  const updateRequest = (id, status) => {
    const next = requests.map((request) => request.id === id ? { ...request, status } : request)
    setRequests(next)
    saveSellerRequests(next)
    saveSellerOrders(getSellerOrders().map((order) => order.id === id ? { ...order, status: status === 'Confirmed' ? 'Accepted' : status } : order))
  }

  const stats = {
    pending: requests.filter((request) => request.status === 'Pending').length,
    pendingOrders: getSellerOrders().filter((order) => order.status === 'Pending').length,
    confirmed: requests.filter((request) => request.status === 'Confirmed').length,
    completed: getSellerOrders().filter((order) => order.status === 'Delivered').length
  }

  return (
    <div className="seller-container">
      <div className="seller-page-heading">
        <div>
          <span className="eyebrow">{shopName}</span>
          <h1>Shop Owner Dashboard</h1>
          <p>Manage local buyer requests, products, and orders from one place.</p>
        </div>
        <Link to="/shop-owner/profile" className="secondary-btn"><Store size={16} /> Shop Profile</Link>
      </div>

      <div className="seller-stat-grid">
        {statLabels.map(({ key, label, icon: Icon }) => (
          <div className="seller-stat-card" key={key}>
            <Icon size={19} />
            <span>{label}</span>
            <strong>{stats[key]}</strong>
          </div>
        ))}

        <div className="seller-stat-card">
          <Store size={19} />
          <span>Total Products</span>
          <strong>{products.length}</strong>
        </div>

        <div className="seller-stat-card warning">
          <Package size={19} />
          <span>Low Stock Products</span>
          <strong>{products.filter((product) => product.stock > 0 && product.stock < 10).length}</strong>
        </div>
      </div>

      <section className="seller-panel">
        <div className="seller-panel-heading">
          <div>
            <span className="eyebrow">Same-district requests first</span>
            <h2>Buyer Requests</h2>
          </div>
          <Link to="/shop-owner/requests" className="secondary-btn">View all</Link>
        </div>

        <div className="seller-request-list">
          {requests.slice(0, 3).map((request) => (
            <div className="seller-request-row" key={request.id}>
              <div>
                <strong>{request.buyerName}</strong>
                <span>{request.product} · {request.quantity} {request.unit}</span>
                <small>{request.city}, {request.district} · PIN {request.pin}</small>
              </div>
              <div className="request-amount">
                ₹{request.amount}
                <span className={`status-badge ${request.status.toLowerCase()}`}>{request.status}</span>
              </div>
              <div className="seller-row-actions">
                {request.status === 'Pending' && (
                  <>
                    <button className="table-action accept" onClick={() => updateRequest(request.id, 'Confirmed')}><Check size={14} /> Accept</button>
                    <button className="table-action reject" onClick={() => updateRequest(request.id, 'Rejected')}><X size={14} /> Reject</button>
                  </>
                )}
                <a className="table-action" href={`mailto:buyer@example.com?subject=Request ${request.id}`}>Contact</a>
              </div>
            </div>
          ))}

          {!requests.length && <div className="empty-state small"><h3>No buyer requests yet</h3></div>}
        </div>
      </section>
    </div>
  )
}
