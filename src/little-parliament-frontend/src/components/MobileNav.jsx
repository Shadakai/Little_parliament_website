import React from 'react';
import { useState } from 'react'
import { Link } from "react-router-dom"
import Icon from "./NavIcon"
import '../styles/components/MobileNav.css'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

export default function MobileNav() {
    const [open, setOpen] = useState(false)
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

    const socialLinkDetails = [
        {
            title: 'Instagram',
            icon: <FaInstagram />,
            url: '/'
        },
        {
            title: 'Facebook',
            icon: <FaFacebook />,
            url: '/'
        },
    ]

    const routes = routeDetails.map((route, index) =>
        <li className="mobile-nav__link" key={index} onClick={() => setOpen(!open)}>
            <Link to={route.path}>{route.title}</Link>
        </li>
    )

    const socialLinks = socialLinkDetails.map((link, index) =>
        <li className="mobile-nav__social-link" key={index}>
            <a href={link.url}>
                <div className="mobile-nav__social-link-content">
                    <i className="mobile-nav__social-link-icon">{link.icon}</i>
                    <h4 className="mobile-nav__social-link-title">{link.title}</h4>
                </div>
            </a>
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
            </div>
            <nav className={open ? 'mobile-nav open' : 'mobile-nav close'}>
                <ul className="mobile-nav__links">
                    {routes}
                </ul>
                <ul className="mobile-nav__social-links">
                    {socialLinks}
                </ul>
            </nav>
        </div>
    )
}
