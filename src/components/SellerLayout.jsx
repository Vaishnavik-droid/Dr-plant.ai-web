import { SellerNavbar } from './SellerNavbar'

export function SellerLayout({ children }) { return <div className="seller-shell"><SellerNavbar /><main className="seller-main">{children}</main></div> }
