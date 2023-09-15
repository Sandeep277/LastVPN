import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div className="hero-text">
            <h1>Want anythig to be easy with <span>LastVPN</span></h1>
            <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
        </div>
            <button className='btn-main'>GetStarted</button>
      </div>
      <div className="hero-right">
        <img src="https://images.unsplash.com/photo-1598946114829-162ee19ac506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      </div>
    </div>
  )
}

export default Hero
