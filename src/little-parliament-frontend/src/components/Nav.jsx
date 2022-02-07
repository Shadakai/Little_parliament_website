import React from 'react';
import { Link } from "react-router-dom"
import '../styles/components/Nav.css'

export default function Nav() {
    const route_details = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/about',
            title: 'About'
        },
        {
            path: '/menu',
            title: 'Menu'
        },
        {
            path: '/products',
            title: 'Products'
        },
        {
            path: '/Cart',
            title: 'Cart'
        },
    ]

    const routes = route_details.map((route, index) =>
        <li className="nav__link">
            <Link to={route.path} key={index}>{route.title}</Link>
        </li>
    )
    return (
        <div className="nav-container">
            <nav className='container nav'>
                {/* <img className='nav__logo' src="https://littleparliament-bucket.s3.ap-southeast-2.amazonaws.com/little-parliament-public-assets/Circle+Logo+Green+on+Transparent+Background.png" alt="Little Parliament Logo" /> */}
                <h2 className="nav__title">Little Parliament</h2>
                <ul className='nav__links'>
                    {routes}
                </ul>
            </nav>
        </div>
    )
}
