import { Link } from 'react-router-dom'
import { useCart } from './CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        {product.photos && product.photos[0] && (
          <img src={product.photos[0]} alt={product.name} />
        )}
        <h3>{product.name}</h3>
      </Link>
      <p>{product.price} ₽</p>
      <button onClick={() => addToCart(product)}>В корзину</button>
    </div>
  )
}
