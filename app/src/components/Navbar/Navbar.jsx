import React from 'react'
import { NavLink } from 'react-router-dom';

function Search() {
 return (
  <header>
    <nav>
      <div>Flashnerds</div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/mylibrary">My Library</NavLink></li>
        <li><NavLink to="/decks/create">New</NavLink></li>
      </ul>
    </nav>
  </header>
 )
}

export default Search
