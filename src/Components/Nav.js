import React from 'react'
import {Link} from "react-router-dom"

export const Nav = () => {
  return (
      <div className='nav' >
            <div className='nav_container'  >
    <Link to="/" className='nav-item'>Home</Link>
    <Link to="/Product"  className='nav-item' >Product</Link>
    <Link to="/News"  className='nav-item' >News & Blog</Link>
    <Link to="/contact"  className='nav-item' >Contact us</Link>
        </div>
    </div>
  )
}
