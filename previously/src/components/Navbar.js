import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
    <nav className='navlink'>
        <Link to="./">Discover</Link>
    </nav>

    </div>
  )
}