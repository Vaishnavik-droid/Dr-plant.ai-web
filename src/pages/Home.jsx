import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Download, Leaf, Search, ShoppingBag, Sprout, Store } from 'lucide-react'
import { FAQSection } from '../components/FAQSection'
import { SectionHeader } from '../components/SectionHeader'
import { ShopSection } from '../components/ShopSection'
import { categories } from '../data/marketplace'

const essentials = [
  { icon: BookOpen, title: 'Plant knowledge', text: 'Clear guidance for everyday growing decisions.' },
  { icon: Sprout, title: 'Crop information', text: 'Explore crop patterns, seasons, and care notes.' },
  { icon: Search, title: 'Disease information', text: 'Recognise symptoms and plan the next field check.' },
  { icon: ShoppingBag, title: 'Local products', text: 'Find useful inputs matched to your district.' },
  { icon: Store, title: 'Nearby shops', text: 'Discover mock local sellers ready for future APIs.' }
]

export function Home() {
  return (
    <>
      <section className="hero-section container">
        <div className="hero-copy">
          <span className="eyebrow">Plant intelligence for everyday growing</span>
          <h1>Smarter Plant Care. Better Farming.</h1>
          <p>
            Dr.PlantAI brings intelligent plant-health guidance and local agricultural shopping closer to you.
          </p>
          <div className="cta-row">
            <Link to="/download" className="primary-btn"><Download size={17} /> Download App</Link>
            <Link to="/shop" className="secondary-btn"><ShoppingBag size={17} /> Shop Products</Link>
          </div>
          <div className="hero-trust">
            <div><strong>Local</strong><span>District-first shopping</span></div>
            <div><strong>Offline-first</strong><span>App-ready plant care</span></div>
            <div><strong>Everyday</strong><span>Practical growing support</span></div>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-visual-card card">
            <div className="phone-panel">
              <div className="panel-topbar">
                <span className="dot green" /><span className="dot yellow" /><span className="dot red" />
              </div>
              <div className="plant-preview">
                <div className="plant-image-wrap">
                  <img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80" alt="Healthy green plant" />
                </div>
                <div className="plant-result">
                  <span className="chip">DR.PLANTAI APP</span>
                  <h3>Care that travels with you</h3>
                  <p>Plant notes, local shopping, and useful field context in one place.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container section-space why-section">
        <SectionHeader eyebrow="Why Dr.PlantAI" title="Everything You Need for Better Plant Care" description="From crop learning to nearby agricultural products, Dr.PlantAI keeps the next good decision within reach." align="center" />
        <div className="three-col-grid">
          {essentials.map(({ icon: Icon, title, text }, index) => (
            <motion.div className="info-card card" key={title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
              <div className="icon-bubble"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container category-section">
        <div className="section-head-row"><SectionHeader eyebrow="Browse essentials" title="Shop by category" description="Find practical products for your crop, garden, or farm." /><Link to="/shop" className="secondary-btn">View all</Link></div>
        <div className="category-strip">{categories.map((category) => <Link to={`/shop?category=${encodeURIComponent(category)}`} className="category-tile" key={category}><span className="category-tile-icon"><Sprout size={18} /></span><strong>{category}</strong></Link>)}</div>
      </section>

      <ShopSection compact />

      <FAQSection />

      <section className="container section-space app-download-box">
        <div className="download-copy">
          <SectionHeader eyebrow="Mobile app" title="Take plant intelligence with you wherever you farm." description="Stay close to plant-care guidance with an offline-first Android experience built for the moments you are out in the field." />
          <div className="cta-row">
            <Link to="/download" className="primary-btn"><Download size={16} /> Download Dr.PlantAI App</Link>
            <button className="secondary-btn" type="button">Scan QR Code</button>
          </div>
        </div>
        <div className="device-mockup card">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="mini-header"><Leaf size={18} /> Dr.Plant AI</div>
              <div className="mini-card"><span>Tomato</span><strong>Early Blight</strong></div>
              <div className="mini-stat"><span>Confidence</span><strong>94%</strong></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
