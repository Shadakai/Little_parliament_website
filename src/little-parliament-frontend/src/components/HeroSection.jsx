import React from 'react';
import "../styles/components/HeroSection.css"
// Hero section that displays a media hero, with a title and description. Added ternary operator to optionally display title and description.
export default function HeroSection(props) {
    // Destructuring the details object being passed in through props
    const { title, description, media } = props.details
    // Checking the media type and rendering the appropriate tag
    const mediaElement = media && media.type === 'image' ? <img className="hero__media" src={media.src} alt={media.alt}></img> : <video className="hero__media" src={media.src} autoPlay={true} muted={true} loop={true}></video>
    return (
        <div className="container hero-container">
            <div className="hero__content">
                <h2 className="hero__title">{title ? title : null}</h2>
                <p className="hero__description">{description ? description : null}</p>
            </div>
            {mediaElement}
        </div>
    );
}
