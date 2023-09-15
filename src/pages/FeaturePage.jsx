import React from 'react'
import './FeaturePage.css'
const FeaturePage = () => {
    return (
        <div className='feature-page'>
            <div className='feature-left'>
                <img src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt="" />
            </div>
            <div className='feature-right'>
                <div className='text-color'>
                <h1>We Provide Many Features You Can Use</h1>
                <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                </div>
                <div className='feature-list'>
                    <li><input type="checkbox" checked/>Powerfull online protection.</li>
                    <li><input type="checkbox" checked/>Supercharged VPN</li>
                    <li><input type="checkbox" checked/>Internet without borders.</li>
                    <li><input type="checkbox" checked/>No specific time limits.</li>
                </div>
            </div>
        </div>
    )
}

export default FeaturePage
