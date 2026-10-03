import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

const initialPlants = [
  { id: 1, name: 'Tomato Plot', crop: 'Tomato', health: 'Healthy', added: '2026-09-16' },
  { id: 2, name: 'Chilli Bed', crop: 'Chilli', health: 'Needs attention', added: '2026-09-14' },
  { id: 3, name: 'Potato Rows', crop: 'Potato', health: 'Watch list', added: '2026-09-12' }
]

export function Plants() {
  const [plants, setPlants] = useState(initialPlants)
  const [form, setForm] = useState({ name: '', crop: 'Tomato' })

  const addPlant = () => {
    if (!form.name.trim()) return

    setPlants((prev) => [
      ...prev,
      { id: Date.now(), name: form.name, crop: form.crop, health: 'Healthy', added: new Date().toISOString().slice(0, 10) }
    ])
    setForm({ name: '', crop: 'Tomato' })
  }

  return (
    <div className="container page-shell">
      <div className="dashboard-header">
        <div>
          <span className="eyebrow">My plants</span>
          <h1>Plant collection</h1>
        </div>
      </div>

      <div className="card plant-form">
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Plant name" aria-label="Plant name" />
        <select value={form.crop} onChange={(e) => setForm({ ...form, crop: e.target.value })} aria-label="Crop type">
          <option>Tomato</option>
          <option>Chilli</option>
          <option>Potato</option>
          <option>Wheat</option>
          <option>Rice</option>
        </select>
        <button type="button" className="primary-btn" onClick={addPlant}><Plus size={15} /> Add plant</button>
      </div>

      <div className="plant-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="card plant-card">
            <div className="plant-topline">
              <strong>{plant.name}</strong>
              <button type="button" className="icon-only" aria-label="Remove plant"><Trash2 size={14} /></button>
            </div>
            <p>{plant.crop}</p>
            <span>{plant.health}</span>
            <small>Added {plant.added}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
