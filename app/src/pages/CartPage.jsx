import { useState } from 'react'
import { useCart } from '../components/CartContext'
import { API_BASE } from '../api'

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    telegram: '',
    email: '',
    comment: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const order = {
      customerName: form.name,
      productIds: items.map((i) => i.id),
    }
    if (form.phone) order.phone = form.phone
    if (form.telegram) order.telegramUsername = form.telegram
    if (form.email) order.email = form.email
    if (form.comment) order.customerComment = form.comment

    fetch(`${API_BASE}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    })
      .then((r) => {
        if (r.ok) {
          clearCart()
          setSubmitted(true)
        }
      })
      .catch((e) => console.error(e))
  }

  if (submitted) return <h1>Спасибо за заказ!</h1>

  return (
    <div>
      <h1>Корзина</h1>
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul>
            {items.map((p) => (
              <li key={p.id}>
                {p.name} - {p.price} ₽{' '}
                <button onClick={() => removeFromCart(p.id)}>Удалить</button>
              </li>
            ))}
          </ul>
          <h2>Оформление заказа</h2>
          <form onSubmit={handleSubmit} className="order-form">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Имя"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Телефон"
            />
            <input
              name="telegram"
              value={form.telegram}
              onChange={handleChange}
              placeholder="Telegram"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <textarea
              name="comment"
              value={form.comment}
              onChange={handleChange}
              placeholder="Комментарий"
            />
            <button type="submit">Отправить</button>
          </form>
        </>
      )}
    </div>
  )
}
