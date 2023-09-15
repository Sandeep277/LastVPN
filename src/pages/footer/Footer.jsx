import './Footer.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-left">
                <div className="left"><span className='logo'>LastVPN</span></div>
                <div>
                    <p><span>LastVPN</span>
                        LaslesVPN is a private virtual network that has unique features and has high security.
                    </p>
                </div>
                <div className="social-links">
                    <AiFillGithub className='links'/>
                    <AiFillLinkedin className='links'/>
                    <AiFillTwitterCircle className='links'/>
                </div>
            </div>
            <div className="footer-right">
                <div className="product">
                    <h4>Product</h4>
                    <li>Download</li>
                    <li>Pricing</li>
                    <li>Locations</li>
                    <li>Server</li>
                    <li>Blog</li>
                </div>
                <div className="engage">
                    <h4>Engage</h4>
                    <li>LaslesVPN ? </li>
                    <li>FAQ</li>
                    <li>Tutorials</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </div>
                <div className="earn-money">
                    <h4>Earn Money</h4>
                    <li>Affiliate</li>
                    <li>Become Partner</li>

                </div>
            </div>
        </footer>
    )
}

export default Footer
