export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.photos && product.photos[0] && (
        <img src={product.photos[0]} alt={product.name} />
      )}
      <h3>{product.name}</h3>
      <p>{product.price} ₽</p>
    </div>
  )
}
