import React from 'react';
import { useState } from 'react'
import { Link } from "react-router-dom"
import Icon from "./NavIcon"
import '../styles/components/MobileNav.css'
import { routeDetails, socialLinkDetails } from '../utilities/RouteDetails'
import SocialLinks from "./SocialLinks"

export default function MobileNav() {
    const [open, setOpen] = useState(false)

    const routes = routeDetails.map((route, index) =>
        <li className="mobile-nav__link" key={index} onClick={() => setOpen(!open)}>
            <Link to={route.path}>{route.title}</Link>
        </li>
    )

    return (
        <div className="mobile-nav-container">
            <div className="mobile-nav-content">
                <div className="mobile-nav-icon-container" onClick={() => setOpen(!open)}>
                    <Icon openState={open} />
                </div>
                <h2 className="mobile-nav-title">
                    Little Parliament
                </h2>
                <SocialLinks details={socialLinkDetails}/>
            </div>
            <nav className={open ? 'mobile-nav open' : 'mobile-nav close'}>
                <ul className="mobile-nav__links">
                    {routes}
                </ul>
                <SocialLinks details={socialLinkDetails}/>
            </nav>
        </div>
    )
}
