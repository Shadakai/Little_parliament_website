import React from 'react';
import { Link } from "react-router-dom"
import '../styles/components/Nav.css'

export default function Nav() {
    const routeDetails = [
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

    const routes = routeDetails.map((route, index) =>
        <li className="nav__link" key={index}>
            <Link to={route.path}>{route.title}</Link>
        </li>
    )
    return (
        <div className="nav-container">
            <nav className='container nav'>
                <h2 className="nav__title">Little Parliament</h2>
                <ul className='nav__links'>
                    {routes}
                </ul>
            </nav>
        </div>
    )
}
