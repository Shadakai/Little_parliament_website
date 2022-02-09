import React from 'react';
import "../styles/components/HeroSection.css"

export default function HeroSection(props) {
    const { title, description, media } = props.details
    const mediaElement = media && media.type === 'image' ? <img className="hero__media" src={media.src} alt={media.alt}></img> : <video className="hero__media" src={media.src} autoPlay={true} muted={true} loop={true}></video>
    return (
        <div className="container hero-container">
            <div className="hero__content">
                <h2 className="hero__title">{title}</h2>
                <p className="hero__description">{description}</p>
            </div>
            {mediaElement}
        </div>
    );
}
