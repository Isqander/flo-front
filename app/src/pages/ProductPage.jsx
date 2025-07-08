import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_BASE } from '../api'
import { useCart } from '../components/CartContext'

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    fetch(`${API_BASE}/api/products/${id}`)
      .then((r) => r.json())
      .then(setProduct)
      .catch((e) => console.error(e))
  }, [id])

  if (!product) return <div>Загрузка...</div>

  return (
    <div>
      <h1>{product.name}</h1>
      {product.photos && product.photos[0] && (
        <img src={product.photos[0]} alt={product.name} />
      )}
      <p>{product.description}</p>
      <p>Цена: {product.price} ₽</p>
      <button onClick={() => addToCart(product)}>Добавить в корзину</button>
    </div>
  )
}
