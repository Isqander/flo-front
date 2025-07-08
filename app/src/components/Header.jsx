import { Link } from 'react-router-dom'
import logo from '../Logo.svg'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="FLO logo" style={{ height: '40px', marginRight: '1rem' }} />
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/about">О проекте</Link>
        <Link to="/buyers">Покупателям</Link>
      </nav>
    </header>
  )
}
