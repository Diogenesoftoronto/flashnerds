import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
function Search() {
 return (
  <header className="navbar">
    <nav>
      <div className="navbar__title">Flashnerds</div>
      <ul className='navbar__content'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/mylibrary">My Library</NavLink></li>
        <li><NavLink to="/decks/create" className="navbar__content__button">New</NavLink></li>
        <li><NavLink to="/login" className="navbar__content__button">Login</NavLink></li>
      </ul>
    </nav>
  </header>
 )
}

export default Search
