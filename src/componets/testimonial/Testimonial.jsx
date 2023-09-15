import React from 'react'
import './Testimonial.css'
const Testimonial = () => {
    return (
        <div className='testimonial'>
            <div className="test-one">
                <img src="https://images.unsplash.com/photo-1644381348384-da4f9a7b4c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                <p><span>Free Plan</span></p>
            </div>
            <div className="test-two">
                <p>Unlimited Bandwitch </p>
                <p>Encrypted Connection </p>
                <p>No Traffic Logs</p>
                <p>Works on All Devices </p>
            </div>
            <div className="test-three">
                <p><span>Free</span></p>
                <button>Select</button>
            </div>
        </div>
    )
}

export default Testimonial
