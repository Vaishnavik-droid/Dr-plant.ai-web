import { Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { categories } from '../data/marketplace'
import { getSellerProducts, saveSellerProducts } from '../data/sellerData'

const defaultProduct = {
  id: '',
  name: '',
  category: 'Seeds',
  price: '',
  discount: 0,
  stock_quantity: 0,
  description: '',
  image_url: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80',
  is_active: true
}

function normalizeProduct(product = {}) {
  const stock = Number(product.stock_quantity ?? product.stock ?? 0)
  const status = product.status || (product.is_active === false || stock <= 0 ? 'Out of stock' : 'Active')

  return {
    ...product,
    id: product.id || `seller-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: product.name || '',
    category: product.category || 'Seeds',
    price: Number(product.price || 0),
    discount: Number(product.discount || 0),
    stock_quantity: stock,
    description: product.description || '',
    image_url: product.image_url || product.image || defaultProduct.image_url,
    is_active: product.is_active ?? status === 'Active',
    status
  }
}

export function SellerProducts() {
  const [products, setProducts] = useState(getSellerProducts())
  const [form, setForm] = useState(null)

  const save = (event) => {
    event.preventDefault()

    const item = normalizeProduct({
      ...form,
      id: form.id || `seller-${Date.now()}`,
      price: Number(form.price || 0),
      stock_quantity: Number(form.stock_quantity ?? form.stock ?? 0),
      discount: Number(form.discount || 0),
      is_active: Number(form.stock_quantity ?? form.stock ?? 0) > 0,
      status: Number(form.stock_quantity ?? form.stock ?? 0) > 0 ? 'Active' : 'Out of stock'
    })

    const next = form.id
      ? products.map((product) => product.id === form.id ? item : product)
      : [...products, item]

    setProducts(next)
    saveSellerProducts(next)
    setForm(null)
  }

  const remove = (id) => {
    const next = products.filter((product) => product.id !== id)
    setProducts(next)
    saveSellerProducts(next)
  }

  return (
    <div className="seller-container">
      <div className="seller-page-heading">
        <div>
          <span className="eyebrow">Inventory</span>
          <h1>Manage Products</h1>
          <p>Keep your local catalogue and stock information current.</p>
        </div>
        <button className="primary-btn" onClick={() => setForm(defaultProduct)}>
          <Plus size={16} /> Add Product
        </button>
      </div>

      {form && (
        <form className="seller-panel seller-product-form" onSubmit={save}>
          <div className="seller-panel-heading">
            <h2>{form.id ? 'Edit Product' : 'Add Product'}</h2>
            <button type="button" className="table-action" onClick={() => setForm(null)}>Cancel</button>
          </div>

          <div className="form-grid">
            <label>
              Product name
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>

            <label>
              Category
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                {categories.map((category) => <option key={category}>{category}</option>)}
              </select>
            </label>

            <label>
              Price
              <input required type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
            </label>

            <label>
              Discount %
              <input type="number" value={form.discount} onChange={(e) => setForm({ ...form, discount: e.target.value })} />
            </label>

            <label>
              Stock quantity
              <input required type="number" value={form.stock_quantity ?? form.stock ?? 0} onChange={(e) => setForm({ ...form, stock_quantity: e.target.value, stock: e.target.value })} />
            </label>

            <label>
              Product image URL
              <input value={form.image_url || ''} onChange={(e) => setForm({ ...form, image_url: e.target.value })} />
            </label>

            <label className="full-width">
              Short description
              <textarea value={form.description || ''} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} />
            </label>
          </div>

          <button className="primary-btn" type="submit">Save product</button>
        </form>
      )}

      <section className="seller-panel">
        <div className="seller-table-wrap">
          <table className="seller-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const stock = Number(product.stock_quantity ?? product.stock ?? 0)
                const status = product.status || (product.is_active === false || stock <= 0 ? 'Out of stock' : 'Active')
                const badgeClass = status.toLowerCase().replaceAll(' ', '-')

                return (
                  <tr key={product.id}>
                    <td>
                      <div className="seller-product-cell">
                        <img src={product.image_url || product.image || defaultProduct.image_url} alt={product.name} />
                        <div>
                          <strong>{product.name}</strong>
                          <small>{product.brand_name || 'Local product'}</small>
                        </div>
                      </div>
                    </td>
                    <td>{product.category}</td>
                    <td>₹{Number(product.price || 0)}</td>
                    <td>{stock}</td>
                    <td>
                      <span className={`status-badge ${badgeClass}`}>{status}</span>
                    </td>
                    <td>
                      <div className="seller-row-actions">
                        <button className="table-action" type="button" onClick={() => setForm({ ...normalizeProduct(product) })}>Edit</button>
                        <button className="table-action danger" type="button" onClick={() => remove(product.id)}>
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
