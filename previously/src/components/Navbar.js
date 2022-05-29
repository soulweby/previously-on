import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/betaseries_random.png"


export default function Navbar() {
  return (
    <div className='navbar'>
    <nav className='navlink'>
        <div className='main-logo'>
        <img src={logo} alt='logo' className='logo' />
        <Link to="./" className='link'>Discover</Link>
        <Link to="./favorite" className='link'>Favorite</Link>
        </div>
        <form className='navform'>
          <input  type="search" placeholder="search series"/>
          <input  type="submit" value="recherche"/>
        </form>
    </nav>

    </div>
  )
}
