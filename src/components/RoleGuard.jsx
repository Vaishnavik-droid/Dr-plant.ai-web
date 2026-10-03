import { Navigate, useLocation } from 'react-router-dom'
import { getCurrentProfile } from '../services/authService'

export function RoleGuard({ role, children }) {
  const location = useLocation()
  const profile = getCurrentProfile()
  const normalizedRole = profile?.role === 'seller' ? 'shop_owner' : profile?.role === 'buyer' ? null : profile?.role

  if (!profile) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />
  }

  if (normalizedRole !== role) {
    if (normalizedRole === 'shop_owner') return <Navigate to="/shop-owner/dashboard" replace />
    return <Navigate to="/" replace />
  }

  return children
}
