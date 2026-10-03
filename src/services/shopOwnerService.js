export const diseaseSuggestions = [
  'Early Blight',
  'Late Blight',
  'Common Rust',
  'Apple Scab',
  'Yellow Leaf Curl Virus',
  'Bacterial Spot',
  'Tomato',
  'Potato',
  'Corn (Maize)',
  'Apple',
  'Bell Pepper (Capsicum)'
]

const STORAGE_KEYS = {
  profile: 'drPlantProfile',
  shop: 'drPlantShopProfile',
  products: 'drPlantShopProducts',
  orders: 'drPlantShopOrders',
  uploads: 'drPlantBulkUploads',
  premiumClaims: 'drPlantPremiumClaims',
  adminActionLog: 'drPlantAdminActionLog'
}

const demoProducts = [
  {
    id: 'prod-1',
    shop_id: 'demo-shop',
    name: 'Ridomil Gold 68 WG',
    brand_name: 'Syngenta',
    category: 'chemical',
    chemical_salt: 'Metalaxyl-M 4% + Mancozeb 64% WP',
    dosage_per_15l: '35g - 40g per 15L Knapsack Tank',
    target_diseases: ['Late Blight', 'Early Blight'],
    pack_size: '500g',
    price: 680,
    mrp: 740,
    stock_quantity: 42,
    phi_days: 14,
    image_url: 'https://images.unsplash.com/photo-1592982537446-6b9c3d74b68b?auto=format&fit=crop&w=900&q=80',
    is_active: true
  },
  {
    id: 'prod-2',
    shop_id: 'demo-shop',
    name: 'Neem Shield Bio Spray',
    brand_name: 'BioGreen',
    category: 'organic',
    chemical_salt: '',
    dosage_per_15l: '200ml per 15L',
    target_diseases: ['Apple Scab'],
    pack_size: '1L',
    price: 320,
    mrp: 320,
    stock_quantity: 12,
    phi_days: 7,
    image_url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    is_active: true
  }
]

const demoOrders = [
  {
    id: 'ord-1001',
    order_code: 'ORD-1001',
    product_id: 'prod-1',
    shop_id: 'demo-shop',
    farmer_name: 'Rahul Patil',
    village_address: 'Maan, Baramati',
    phone: '9876543210',
    quantity: 2,
    total_amount: 1360,
    payment_method: 'cod',
    status: 'confirmed',
    created_at: new Date().toISOString()
  },
  {
    id: 'ord-1002',
    order_code: 'ORD-1002',
    product_id: 'prod-2',
    shop_id: 'demo-shop',
    farmer_name: 'Sneha Jadhav',
    village_address: 'Koregaon, Pune',
    phone: '9988776655',
    quantity: 1,
    total_amount: 320,
    payment_method: 'upi',
    status: 'dispatched',
    created_at: new Date(Date.now() - 86400000).toISOString()
  }
]

const demoPremiumClaims = [
  {
    id: 'premium-1',
    device_id: 'device-11',
    phone: '9876543210',
    plan: 'single',
    amount_paid: 299,
    utr_reference: 'UTR-2026001',
    status: 'pending_verification',
    activated_at: new Date().toISOString(),
    verified_at: null,
    verified_by: null,
    expires_at: null
  }
]

const demoShopProfile = {
  id: 'demo-shop',
  owner_id: 'demo-owner',
  shop_name: 'Patil Agro Centre',
  owner_name: 'Vijay Patil',
  phone: '9876543210',
  whatsapp: '9876543210',
  address: 'Main Market Road, Baramati',
  village: 'Baramati',
  district: 'Pune',
  state: 'Maharashtra',
  pincode: '413102',
  latitude: 18.1591,
  longitude: 74.5776,
  is_verified_partner: false,
  subscription_active: true,
  subscription_expires_at: new Date(Date.now() + 31536000000).toISOString(),
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function ensureDemoShopOwnerData() {
  if (!readStorage(STORAGE_KEYS.shop, null)) {
    writeStorage(STORAGE_KEYS.shop, demoShopProfile)
  }
  if (!readStorage(STORAGE_KEYS.products, null)) {
    writeStorage(STORAGE_KEYS.products, demoProducts)
  }
  if (!readStorage(STORAGE_KEYS.orders, null)) {
    writeStorage(STORAGE_KEYS.orders, demoOrders)
  }
  if (!readStorage(STORAGE_KEYS.uploads, null)) {
    writeStorage(STORAGE_KEYS.uploads, [])
  }
  if (!readStorage(STORAGE_KEYS.premiumClaims, null)) {
    writeStorage(STORAGE_KEYS.premiumClaims, demoPremiumClaims)
  }
}

export function getShopProfile() {
  return readStorage(STORAGE_KEYS.shop, demoShopProfile)
}

export function saveShopProfile(profile) {
  const next = { ...profile, updated_at: new Date().toISOString() }
  writeStorage(STORAGE_KEYS.shop, next)
  return next
}

export function getShopProducts() {
  return readStorage(STORAGE_KEYS.products, demoProducts)
}

export function saveShopProducts(products) {
  writeStorage(STORAGE_KEYS.products, products)
  return products
}

export function getShopOrders() {
  return readStorage(STORAGE_KEYS.orders, demoOrders)
}

export function saveShopOrders(orders) {
  writeStorage(STORAGE_KEYS.orders, orders)
  return orders
}

export function getUploadHistory() {
  return readStorage(STORAGE_KEYS.uploads, [])
}

export function saveUploadHistory(history) {
  writeStorage(STORAGE_KEYS.uploads, history)
  return history
}

export function getPremiumClaims() {
  return readStorage(STORAGE_KEYS.premiumClaims, demoPremiumClaims)
}

export function savePremiumClaims(claims) {
  writeStorage(STORAGE_KEYS.premiumClaims, claims)
  return claims
}

export function parseTargetDiseases(value) {
  if (!value) return []
  return String(value)
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
}

export function formatMoney(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Number(amount || 0))
}

export function getDuplicateUtrWarnings() {
  const claims = getPremiumClaims()
  const counts = new Map()
  claims.forEach((item) => {
    const key = (item.utr_reference || '').trim()
    if (!key) return
    counts.set(key, (counts.get(key) || 0) + 1)
  })
  return [...counts.entries()].filter(([, count]) => count > 1).map(([utr]) => utr)
}
