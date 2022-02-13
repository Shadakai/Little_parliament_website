import React from 'react';
import '../styles/components/SplitLayout.css'
// SplitLayout component accepts a details object, and a Boolean value value to specify if the layout should be revered as props and is used to display an image with text content next to it
export default function SplitLayout(props) {
    // Desctructuring details object
    const { title, description, image, sale_price } = props.details
    return (
    //    Conditionally adding the class of split-layout__reverse based on the value of the reverse prop
        <div className={`container split-layout ${props.reverse ? 'split-layout__reverse' : ''}`}>
            <div className='split-layout__content'>
                <h2 className='split-layout__title'>{title}</h2>
                <p className="split-layout__price">{sale_price ? sale_price : null}</p>
                <p className='split-layout__description' >{description}</p>
            </div>
            <img className='split-layout__image' src={image.src} alt={image.alt} />
        </div>
    )
}