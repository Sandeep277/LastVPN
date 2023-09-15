import React from 'react'
import './Rac.css'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { HiOutlineServerStack } from 'react-icons/hi2'
const Rac = () => {
    return (
        <div className='rac'>
            <div className='rac-icons'>
                <div>
                    <BsFillPeopleFill className='circle-logo' />
                </div>
                <div>
                    <p>90+</p>
                    <p>Locations</p>
                </div>
            </div>
            <div className='rac-icons'>
                <div>
                    <FaLocationDot className='circle-logo' />
                </div>
                <div>
                    <p>90+</p>
                    <p>Locations</p>
                </div>
            </div>
            <div className='rac-icons'>
                <div>
                    <HiOutlineServerStack className='circle-logo' />
                </div>
                <div>
                    <p>90+</p>
                    <p>Locations</p>
                </div>
            </div>
        </div>
    )
}

export default Rac
