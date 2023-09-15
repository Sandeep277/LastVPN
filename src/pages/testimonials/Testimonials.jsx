import React from 'react'
import Testimonial from '../../componets/testimonial/Testimonial'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <> 
    <div className='' style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'30px'
    }}>
      <h1>Choose Your Plan</h1>
      <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
    </div>
      <div className='testimonials' style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px'
      }}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </>
  )
}

export default Testimonials
