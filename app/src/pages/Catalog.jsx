import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { API_BASE } from '../api'

export default function Catalog() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/products`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data)
        else if (data && data.products) setProducts(data.products)
      })
      .catch((e) => console.error(e))
  }, [])

  return (
    <div>
      <h1>Каталог</h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
