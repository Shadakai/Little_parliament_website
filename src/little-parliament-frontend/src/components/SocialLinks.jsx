import React from 'react'
import "../styles/components/SocialLinks.css"

// SocialLinks component accepts a title as a string, and details as an array of objects through props. It is used to display the social media icons, and a title is one is passed through
export default function SocialLinks(props) {
    const { details, title } = props
    // Mapping through details array and creating an li for each link object
    const socialLinks = details.map((link, index) =>
        <li className="social-link" key={index}>
            <a href={link.url} target="__blank">
                <div className="social-link-content">
                    <i className="social-link-icon">{link.icon}</i>
                    {/* Ternary operator to render a title is one has been passed through */}
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
