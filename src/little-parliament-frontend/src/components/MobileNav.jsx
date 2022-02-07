import React from 'react';
import { Link } from "react-router-dom"

export default function MobileNav() {
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
        <Link to={route.path} key={index}>{route.title}</Link>
    )
    return (
        <nav>
            {routes}
        </nav>
    )
}
