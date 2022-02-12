import React from 'react';
import '../styles/components/SplitLayout.css'

export default function SplitLayout(props) {
    const { title, description, image } = props.details 
    {console.log(props)}
    return (
       
        <div className={`container split-layout ${props.reverse ? 'split-layout__reverse' : ''}`}>
            <div className='split-layout__content'>
                <h2 className='split-layout__title'>{title}</h2>
                <p className='split-layout__description' >{description}</p>
            </div>
            <img className='split-layout__image' src={image.src} alt={image.alt} />
        </div>
    )
}