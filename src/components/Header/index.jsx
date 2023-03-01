import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </header>
  )
}

export default Header
