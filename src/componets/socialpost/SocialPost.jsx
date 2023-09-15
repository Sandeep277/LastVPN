import React from 'react'
import './SocialPost.css'
import { AiOutlineStar } from 'react-icons/ai'
const SocialPost = () => {
    return (
        <div className='social'>
            <div className='social-post'>
                <div className='profile'>
                    <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                    <div className='profile-name'>
                        <h4>Viexh Robert</h4>
                        <p>Poland</p>
                    </div>
                </div>
                <div className='ratings'>4.5 <AiOutlineStar className='star'/></div>
            </div>
            <div className="post-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero totam sit aliquam sed deleniti asperiores voluptatibus ipsam tenetur id ipsa doloremque maxime officia beatae ut consectetur, quod incidunt ducimus ratione!
                </p>
            </div>
        </div>
    )
}

export default SocialPost
