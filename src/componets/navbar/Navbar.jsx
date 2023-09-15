import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left"><span className='logo'>LastVPN</span></div>
      <div className="middel">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#help">Help</a>
      </div>
      <div className="right">
        <button className='secondrybtn'>Sign In</button>
        <button className='primarybtn'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
