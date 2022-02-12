import React from 'react'
import "../styles/components/SocialLinks.css"

export default function SocialLinks(props) {
    const { details, title } = props
    const socialLinks = details.map((link, index) =>
        <li className="social-link" key={index}>
            <a href={link.url} target="__blank">
                <div className="social-link-content">
                    <i className="social-link-icon">{link.icon}</i>
                    {title ? <h4 className="social-link-title">{link.title}</h4> : null}
                </div>
            </a>
        </li>
    )
    return (
        <ul className="social-links">
            {socialLinks}
        </ul>
    )
}
