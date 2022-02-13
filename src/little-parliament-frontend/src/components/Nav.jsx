import React from 'react';
import { Link } from "react-router-dom"
import '../styles/components/Nav.css'
import { routeDetails, socialLinkDetails } from '../utilities/RouteDetails'
import SocialLinks from "./SocialLinks"
// Tablet / Desktop nav component. Destructuring routeDetails and socialLinkDetails arrays from RouteDetails.
export default function Nav() {
    // Mapping over routeDetails array and creating an li with a link inside
    const routes = routeDetails.map((route, index) =>
        <li className="nav__link" key={index}>
            <Link to={route.path}>{route.title}</Link>
        </li>
    )

    return (
        <div className="nav-container">
            <nav className='container nav'>
                <div className="nav-content">
                    <Link to="/admin"><div className="adminpanel"/></Link>
                    <Link to="/" className="nav__title">Little Parliament</Link>
                    {/* Rendering routes */}
                    <ul className='nav__links'>
                        {routes}
                    </ul>
                </div>
                {/* Rendering SocialLinks component and passing it socialLinkDetails array. This is very similar to the Mobile Nav. Potential to convert this section into it's own component */}
                <SocialLinks details={socialLinkDetails} />
            </nav>
        </div>
    )
}
