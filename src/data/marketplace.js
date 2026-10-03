export const categories = [
  'Seeds',
  'Fertilizers',
  'Plant Nutrition',
  'Organic Products',
  'Crop Protection',
  'Gardening Supplies',
  'Farming Tools',
  'Plant Care Products',
  'Agricultural Equipment'
]

export const locations = {
  states: ['Maharashtra', 'Punjab', 'Karnataka', 'Uttar Pradesh'],
  districts: {
    Maharashtra: ['Pune', 'Nashik', 'Nagpur', 'Kolhapur', 'Satara', 'Sangli', 'Ahmednagar', 'Solapur', 'Aurangabad', 'Ratnagiri', 'Jalgaon', 'Nanded'],
    Punjab: ['Ludhiana', 'Amritsar', 'Patiala', 'Bathinda', 'Jalandhar', 'Moga', 'Sangrur', 'Hoshiarpur', 'Gurdaspur', 'Fazilka'],
    Karnataka: ['Bengaluru Rural', 'Mysuru', 'Belagavi', 'Dharwad', 'Mandya', 'Hassan', 'Tumakuru', 'Shivamogga', 'Vijayapura', 'Kolar'],
    'Uttar Pradesh': ['Lucknow', 'Agra', 'Meerut', 'Varanasi', 'Kanpur Nagar', 'Prayagraj', 'Gorakhpur', 'Bareilly', 'Moradabad', 'Ayodhya']
  },
  cities: {
    Pune: ['Baramati', 'Haveli', 'Junnar', 'Mawal', 'Shirur', 'Bhor'],
    Nashik: ['Niphad', 'Sinnar', 'Igatpuri', 'Dindori', 'Yeola', 'Malegaon'],
    Nagpur: ['Hingna', 'Kamptee', 'Katol', 'Umred', 'Ramtek'],
    Kolhapur: ['Karvir', 'Ichalkaranji', 'Kagal', 'Gadhinglaj', 'Panhala', 'Shahuwadi'],
    Satara: ['Karad', 'Phaltan', 'Wai', 'Khatav', 'Koregaon'],
    Sangli: ['Miraj', 'Tasgaon', 'Islampur', 'Jat', 'Kavathe Mahankal'],
    Ahmednagar: ['Sangamner', 'Shrirampur', 'Rahata', 'Kopargaon', 'Akole'],
    Solapur: ['Barshi', 'Akkalkot', 'Pandharpur', 'Mangalwedha', 'Malshiras'],
    Aurangabad: ['Paithan', 'Kannad', 'Vaijapur', 'Sillod', 'Gangapur'],
    Ratnagiri: ['Chiplun', 'Dapoli', 'Khed', 'Rajapur', 'Lanja'],
    Jalgaon: ['Bhusawal', 'Chalisgaon', 'Pachora', 'Amalner', 'Raver'],
    Nanded: ['Deglur', 'Kinwat', 'Hadgaon', 'Loha', 'Mukhed'],
    Ludhiana: ['Jagraon', 'Khanna', 'Samrala', 'Raikot', 'Payal'],
    Amritsar: ['Ajnala', 'Baba Bakala', 'Majitha', 'Attari'],
    Patiala: ['Rajpura', 'Nabha', 'Samana', 'Ghanaur', 'Bhadson'],
    Bathinda: ['Rampura Phul', 'Talwandi Sabo', 'Maur', 'Nathana'],
    Jalandhar: ['Nakodar', 'Phillaur', 'Shahkot', 'Adampur'],
    Moga: ['Baghapurana', 'Dharamkot', 'Nihal Singh Wala'],
    Sangrur: ['Malerkotla', 'Sunam', 'Dhuri', 'Moonak'],
    Hoshiarpur: ['Dasuya', 'Garhshankar', 'Mukerian', 'Tanda'],
    Gurdaspur: ['Batala', 'Dera Baba Nanak', 'Dinanagar', 'Qadian'],
    Fazilka: ['Abohar', 'Jalalabad', 'Fazilka'],
    'Bengaluru Rural': ['Devanahalli', 'Doddaballapur', 'Hosakote', 'Nelamangala', 'Magadi'],
    Mysuru: ['Nanjangud', 'Hunsur', 'T. Narasipura', 'Periyapatna', 'K.R. Nagar'],
    Belagavi: ['Chikodi', 'Athani', 'Gokak', 'Bailhongal', 'Ramdurg'],
    Dharwad: ['Hubballi', 'Kalghatgi', 'Kundgol', 'Navalgund'],
    Mandya: ['Maddur', 'Malavalli', 'Pandavapura', 'Srirangapatna'],
    Hassan: ['Arsikere', 'Belur', 'Channarayapatna', 'Sakleshpur'],
    Tumakuru: ['Sira', 'Gubbi', 'Kunigal', 'Madhugiri'],
    Shivamogga: ['Sagar', 'Bhadravati', 'Shikarpur', 'Thirthahalli'],
    Vijayapura: ['Indi', 'Sindagi', 'Basavana Bagewadi', 'Muddebihal'],
    Kolar: ['Malur', 'Bangarapet', 'Mulbagal', 'Chintamani'],
    Lucknow: ['Malihabad', 'Mohan', 'Bakshi Ka Talab', 'Mohanlalganj', 'Kakori'],
    Agra: ['Fatehabad', 'Kheragarh', 'Etmadpur', 'Bah'],
    Meerut: ['Mawana', 'Sardhana', 'Kithore', 'Daurala'],
    Varanasi: ['Pindra', 'Rohaniya', 'Sewapuri', 'Cholapur'],
    'Kanpur Nagar': ['Bilhaur', 'Ghatampur', 'Kalyanpur', 'Sarsaul'],
    Prayagraj: ['Phulpur', 'Koraon', 'Meja', 'Soraon'],
    Gorakhpur: ['Sahjanwa', 'Khajni', 'Chauri Chaura', 'Bansgaon'],
    Bareilly: ['Aonla', 'Baheri', 'Faridpur', 'Nawabganj'],
    Moradabad: ['Bilari', 'Thakurdwara', 'Kanth', 'Kundarki'],
    Ayodhya: ['Sohawal', 'Milkipur', 'Rudauli', 'Bikapur']
  }
}

export const products = [
  { id: 'pusa-tomato-seeds', name: 'Pusa Ruby Tomato Seeds', category: 'Seeds', price: 149, mrp: 199, rating: 4.8, reviews: 124, seller: 'GreenHarvest Seeds', location: 'Pune, Maharashtra', image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=900&q=80', description: 'High-yielding tomato seeds selected for consistent fruiting and excellent kitchen-garden performance.', usage: 'Sow 2 to 3 seeds per cell. Transplant after 25 to 30 days in well-drained soil.', availability: 'In stock · dispatches in 1-2 days' },
  { id: 'neem-cake-organic', name: 'Organic Neem Cake Fertilizer', category: 'Organic Products', price: 299, mrp: 399, rating: 4.7, reviews: 89, seller: 'Mitti & More', location: 'Nashik, Maharashtra', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80', description: 'A natural soil conditioner that supports root health and helps maintain balanced soil fertility.', usage: 'Mix 100 to 200 grams into the topsoil around each established plant.', availability: 'In stock · dispatches in 2-3 days' },
  { id: 'seaweed-plant-tonic', name: 'Seaweed Plant Vitality Tonic', category: 'Plant Nutrition', price: 389, mrp: 499, rating: 4.6, reviews: 56, seller: 'RootRise Organics', location: 'Ludhiana, Punjab', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80', description: 'A concentrated seaweed tonic for stronger roots, improved flowering, and everyday plant resilience.', usage: 'Dilute 3 ml in 1 litre of water and apply every 10 to 14 days.', availability: 'In stock · dispatches in 1-2 days' },
  { id: 'drip-kit-home-farm', name: 'Home Farm Drip Irrigation Kit', category: 'Gardening Supplies', price: 799, mrp: 999, rating: 4.5, reviews: 42, seller: 'KisanCraft Tools', location: 'Patiala, Punjab', image: 'https://images.unsplash.com/photo-1599685315640-3f7f0f6d4b0a?auto=format&fit=crop&w=900&q=80', description: 'A simple 20-pot drip kit designed to make consistent watering easier for terraces and small plots.', usage: 'Connect the filter to a water source, place emitters near roots, and adjust flow as needed.', availability: 'Limited stock · dispatches in 3-4 days' },
  { id: 'bio-pesticide-kit', name: 'BioShield Crop Protection Kit', category: 'Crop Protection', price: 549, mrp: 699, rating: 4.4, reviews: 38, seller: 'Fieldwise Agri Store', location: 'Mysuru, Karnataka', image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=900&q=80', description: 'A practical biological crop-protection set for preventive care in vegetable and fruit gardens.', usage: 'Follow the pack label for dilution and spray during cool hours with protective equipment.', availability: 'In stock · dispatches in 2-3 days' },
  { id: 'hand-pruner-pro', name: 'Precision Garden Hand Pruner', category: 'Farming Tools', price: 329, mrp: 449, rating: 4.8, reviews: 71, seller: 'KisanCraft Tools', location: 'Pune, Maharashtra', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80', description: 'Comfort-grip bypass pruner for clean cuts on herbs, flowers, fruit plants, and young branches.', usage: 'Clean blades before and after use. Keep fingers clear of the cutting path.', availability: 'In stock · dispatches in 1-2 days' },
  { id: 'vermicompost-10kg', name: 'Garden Gold Vermicompost 10 kg', category: 'Fertilizers', price: 249, mrp: 299, rating: 4.7, reviews: 102, seller: 'Mitti & More', location: 'Nashik, Maharashtra', image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80', description: 'Well-matured vermicompost for enriching potting mixes, beds, and farm soil with organic matter.', usage: 'Blend one part compost with three parts soil or spread 1 to 2 kg per square metre.', availability: 'In stock · dispatches in 2-3 days' },
  { id: 'cocopeat-block', name: 'Cocopeat Growing Medium Block', category: 'Plant Care Products', price: 179, mrp: 229, rating: 4.5, reviews: 63, seller: 'GreenHarvest Seeds', location: 'Kolhapur, Maharashtra', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80', description: 'A lightweight, moisture-friendly growing medium for seed starting, containers, and nursery trays.', usage: 'Hydrate the block with clean water, fluff well, and mix with compost before planting.', availability: 'In stock · dispatches in 1-2 days' }
]

export const shops = [
  { id: 'greenharvest-pune', name: 'GreenHarvest Seeds', type: 'Seed Store', area: 'Haveli, Pune', distance: '4.2 km', rating: 4.8, categories: ['Seeds', 'Plant Care Products'], products: 34 },
  { id: 'mitti-nashik', name: 'Mitti & More', type: 'Organic Input Store', area: 'Niphad, Nashik', distance: '8.7 km', rating: 4.7, categories: ['Organic Products', 'Fertilizers'], products: 28 },
  { id: 'kisan-patiala', name: 'KisanCraft Tools', type: 'Agricultural Equipment', area: 'Rajpura, Patiala', distance: '12.4 km', rating: 4.6, categories: ['Farming Tools', 'Gardening Supplies'], products: 41 },
  { id: 'fieldwise-mysuru', name: 'Fieldwise Agri Store', type: 'Crop Protection Store', area: 'Mysuru, Karnataka', distance: '18.1 km', rating: 4.5, categories: ['Crop Protection', 'Plant Nutrition'], products: 22 }
]

export const defaultLocation = { state: 'Maharashtra', district: 'Pune', city: 'Baramati', pin: '' }

export function getProduct(id) {
  return products.find((product) => product.id === id)
}

export function getCart() {
  try { return JSON.parse(localStorage.getItem('drPlantCart') || '[]') } catch { return [] }
}

export function saveCart(cart) {
  localStorage.setItem('drPlantCart', JSON.stringify(cart))
  window.dispatchEvent(new Event('drPlantCartUpdated'))
}

export function addToCart(product, quantity = 1) {
  const cart = getCart()
  const existing = cart.find((item) => item.id === product.id)
  if (existing) existing.quantity += quantity
  else cart.push({ ...product, quantity })
  saveCart(cart)
}

export function getSavedLocation() {
  try {
    const profile = JSON.parse(localStorage.getItem('drPlantProfile') || 'null')
    const saved = JSON.parse(localStorage.getItem('drPlantLocation') || '{}')
    return { ...defaultLocation, ...(profile?.location || {}), ...saved }
  } catch { return defaultLocation }
}

export function saveLocation(location) {
  localStorage.setItem('drPlantLocation', JSON.stringify(location))
  try {
    const profile = JSON.parse(localStorage.getItem('drPlantProfile') || 'null')
    if (profile) localStorage.setItem('drPlantProfile', JSON.stringify({ ...profile, location }))
  } catch { /* Keep the marketplace location usable if profile storage is unavailable. */ }
  window.dispatchEvent(new Event('drPlantLocationUpdated'))
}

export function getProfile() {
  try { return JSON.parse(localStorage.getItem('drPlantProfile') || 'null') } catch { return null }
}
