// Write your JS code here
import {Link} from 'react-route-dom'

import './index.css'

const Header = () => {
  ;<nav className="header-container">
    <div className="logo-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-im"
        className="logo"
        alt="wave"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="nav-item-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
}

export default Header
