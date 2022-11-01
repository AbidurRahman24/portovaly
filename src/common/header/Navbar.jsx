import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <div className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>


          <div className="navlink">
            <ul className={mobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'} onClick={()=> setMobileMenu(false)}>
              <li>
                <Link to={'/home'}>Home</Link>
              </li>
              <li>
                <Link to={'/shop'}>Shops</Link>
              </li>
              <li>
                <Link to={'/user'}>User account</Link>
              </li>
              <li>
                <Link to={'/vendor'}>Vendor account</Link>
              </li>
              <li>
                <Link to={'/track'}>Track my order</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
            <button className='toggle' onClick={()=> setMobileMenu(!mobileMenu)}>
              {
                mobileMenu ? <i className='fas fa-times close home-btn h'></i>  : <i className='fas fa-bars open'></i>
              }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar