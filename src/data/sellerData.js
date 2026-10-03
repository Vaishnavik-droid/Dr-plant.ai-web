import { defaultLocation } from './marketplace'

export const diseaseSuggestions = [
  'Early Blight',
  'Late Blight',
  'Common Rust',
  'Apple Scab',
  'Yellow Leaf Curl Virus',
  'Bacterial Spot'
]

export const sellerDefaultProfile = {
  role: 'shop_owner',
  full_name: 'Vijay Patil',
  phone: '9876543210',
  email: 'owner@patilagro.in',
  shop_name: 'Patil Agro Centre',
  owner_name: 'Vijay Patil',
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
  location: { ...defaultLocation, city: 'Baramati' }
}

export const sellerProducts = [
  {
    id: 'prod-1',
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

const initialRequests = [
  {
    id: 'request-1001',
    buyerName: 'Rahul Patil',
    product: 'Ridomil Gold 68 WG',
    quantity: 2,
    unit: 'packets',
    district: 'Pune',
    city: 'Baramati',
    pin: '413102',
    date: '27 Sep 2026',
    amount: 1360,
    status: 'Confirmed'
  },
  {
    id: 'request-1002',
    buyerName: 'Sneha Jadhav',
    product: 'Neem Shield Bio Spray',
    quantity: 1,
    unit: 'bottle',
    district: 'Pune',
    city: 'Koregaon',
    pin: '412101',
    date: '26 Sep 2026',
    amount: 320,
    status: 'Pending'
  }
]

const initialOrders = [
  {
    id: 'ord-1001',
    order_code: 'ORD-1001',
    farmer_name: 'Rahul Patil',
    village_address: 'Maan, Baramati',
    phone: '9876543210',
    quantity: 2,
    total_amount: 1360,
    payment_method: 'cod',
    status: 'confirmed',
    created_at: new Date().toISOString(),
    product: 'Ridomil Gold 68 WG'
  },
  {
    id: 'ord-1002',
    order_code: 'ORD-1002',
    farmer_name: 'Sneha Jadhav',
    village_address: 'Koregaon, Pune',
    phone: '9988776655',
    quantity: 1,
    total_amount: 320,
    payment_method: 'upi',
    status: 'dispatched',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    product: 'Neem Shield Bio Spray'
  }
]

function read(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || 'null')
    return value ?? fallback
  } catch {
    return fallback
  }
}

export function getSellerProfile() {
  return read('drPlantSellerProfile', sellerDefaultProfile)
}

export function saveSellerProfile(profile) {
  localStorage.setItem('drPlantSellerProfile', JSON.stringify(profile))
  window.dispatchEvent(new Event('drPlantSellerUpdated'))
}

export function getSellerRequests() {
  return read('drPlantBuyerRequests', initialRequests)
}

export function saveSellerRequests(requests) {
  localStorage.setItem('drPlantBuyerRequests', JSON.stringify(requests))
  window.dispatchEvent(new Event('drPlantRequestsUpdated'))
}

export function getSellerProducts() {
  return read('drPlantSellerProducts', sellerProducts)
}

export function saveSellerProducts(products) {
  localStorage.setItem('drPlantSellerProducts', JSON.stringify(products))
  window.dispatchEvent(new Event('drPlantProductsUpdated'))
}

export function getSellerOrders() {
  return read('drPlantSellerOrders', initialOrders)
}

export function saveSellerOrders(orders) {
  localStorage.setItem('drPlantSellerOrders', JSON.stringify(orders))
  window.dispatchEvent(new Event('drPlantOrdersUpdated'))
}

export function addBuyerRequest(request) {
  saveSellerRequests([...getSellerRequests(), request])
  saveSellerOrders([...getSellerOrders(), request])
}

export function getUploadHistory() {
  return read('drPlantBulkUploads', [])
}

export function saveUploadHistory(history) {
  localStorage.setItem('drPlantBulkUploads', JSON.stringify(history))
}

export function getPremiumClaims() {
  return read('drPlantPremiumClaims', [])
}

export function savePremiumClaims(claims) {
  localStorage.setItem('drPlantPremiumClaims', JSON.stringify(claims))
}

export function parseDiseaseList(value) {
  if (!value) return []
  return String(value)
    .split(';')
    .map((entry) => entry.trim())
    .filter(Boolean)
}

export function getDuplicateUtrWarnings() {
  const claims = getPremiumClaims()
  const map = new Map()

  claims.forEach((claim) => {
    const utr = (claim.utr_reference || '').trim()
    if (!utr) return
    map.set(utr, (map.get(utr) || 0) + 1)
  })

  return [...map.entries()].filter(([, count]) => count > 1).map(([utr]) => utr)
}
