import React from 'react';
import { useState } from 'react'
import { Link } from "react-router-dom"
import Icon from "./NavIcon"
import '../styles/components/MobileNav.css'
import { routeDetails, socialLinkDetails } from '../utilities/RouteDetails'
import SocialLinks from "./SocialLinks"
// Mobile nav component. 
export default function MobileNav() {
    // Setting the intial open state to false
    const [open, setOpen] = useState(false)
    // Mapping through routeDetails array and creating an li for each route. After one of the routes is clicked, the open state is set to false.
    const routes = routeDetails.map((route, index) =>
        <li className="mobile-nav__link" key={index} onClick={() => setOpen(!open)}>
            <Link to={route.path}>{route.title}</Link>
        </li>
    )

    return (
        <div className="mobile-nav-container">
            <div className="mobile-nav-content">
                {/* Setting the open state to the opposite of it's current state when the Icon is clicked */}
                <div className="mobile-nav-icon-container" onClick={() => setOpen(!open)}>
                    <Icon openState={open} />
                </div>
                <Link to="/" className="nav__title">
                    Little Parliament
                </Link>
                <SocialLinks details={socialLinkDetails}/>
            </div>
            {/* Added a condition to dynamically add either the open or close class based off the open state */}
            <nav className={open ? 'mobile-nav open' : 'mobile-nav close'}>
                {/* Rendering our routes */}
                <ul className="mobile-nav__links">
                    {routes}
                </ul>
                {/* Rendering the SocialLinks component and passing it the socialLinkDetails array */}
                <SocialLinks details={socialLinkDetails}/>
            </nav>
        </div>
    )
}
