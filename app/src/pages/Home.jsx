import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Добро пожаловать в FLO vintage</h1>
      <p>
        Селективный винтаж и кастом. Ознакомьтесь с нашим{' '}
        <Link to="/catalog">каталогом</Link>.
      </p>
    </div>
  )
}
