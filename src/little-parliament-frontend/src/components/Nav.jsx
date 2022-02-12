import React from 'react';
import { Link } from "react-router-dom"
import '../styles/components/Nav.css'
import { routeDetails, socialLinkDetails } from '../utilities/RouteDetails'
import SocialLinks from "./SocialLinks"

export default function Nav() {
    const routes = routeDetails.map((route, index) =>
        <li className="nav__link" key={index}>
            <Link to={route.path}>{route.title}</Link>
        </li>
    )

    return (
        <div className="nav-container">
            <nav className='container nav'>
                <div className="nav-content">
                    <h2 className="nav__title">Little Parliament</h2>
                    <ul className='nav__links'>
                        {routes}
                    </ul>
                </div>
                <SocialLinks details={socialLinkDetails} />
            </nav>
        </div>
    )
}
