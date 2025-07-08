import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Logo.svg'

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <header className="header">
        <img src={logo} alt="FLO logo" className="logo" />
        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Открыть меню">
          &#9776;
        </button>
      </header>
      {open && (
        <nav className="overlay">
          <button className="close-button" onClick={close} aria-label="Закрыть меню">
            &times;
          </button>
          <div className="overlay-links">
            <Link to="/" onClick={close}>Главная</Link>
            <Link to="/catalog" onClick={close}>Каталог</Link>
            <Link to="/about" onClick={close}>О проекте</Link>
            <Link to="/buyers" onClick={close}>Покупателям</Link>
          </div>
        </nav>
      )}
    </>
  )
}
