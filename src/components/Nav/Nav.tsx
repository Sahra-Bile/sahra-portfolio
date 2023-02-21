import { Link } from 'react-router-dom'
import './Nav.scss'

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="nav__list__item">
          <Link to={'/projects'}>Projects</Link>
        </li>
        <li className="nav__list__item">
          <Link to={'/about'}>About</Link>
        </li>
        <li className="nav__list__item">
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
