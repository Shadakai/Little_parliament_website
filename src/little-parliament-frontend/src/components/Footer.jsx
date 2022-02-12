import React from 'react'
import SocialLinks from './SocialLinks'
import { socialLinkDetails } from '../utilities/RouteDetails'
import "../styles/components/Footer.css"

export default function Footer() {
  return (
    <div className='footer-container'>
        <footer className="container footer">
            <img src="https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/Circle+Logo+Green+on+Transparent+Background.png" alt="Little Parliament" className='footer__image'/>
            <div className="footer__content">
                <SocialLinks details={socialLinkDetails}/>
                <p className="footer__address">Address: 12 Rainbow Beach Rd<br/>Rainbow Beach</p>
                <small className="footer__copyright">&#169; Little Parliament</small>
            </div>
        </footer>
    </div>
  )
}
