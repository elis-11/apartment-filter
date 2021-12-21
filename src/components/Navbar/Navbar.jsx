import React from 'react'
import './Navbar.scss'

function Navbar() {
    return (
        <nav>
        <div className="nav-wrapper navbar grey">
          <a href="/" className="logo">MERN todo App</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Login</a></li>
          </ul>
        </div>
      </nav>    )
}

export default Navbar
