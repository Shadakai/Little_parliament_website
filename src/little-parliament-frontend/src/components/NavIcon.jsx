import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
// Nav icon component will render either the open or close icon. Importing the icons from react-icons.
export default function NavIcon(props) {
    // Desctructuring openState from props. 
    const { openState } = props
    // Ternary operator to render the appropriate icon based off the openState
    const icon = openState ? <IoMdClose size='24px' /> : <AiOutlineMenu size='24px' />
    return (
        <>
        {/* Conditionall adding either open or close state based off of the openState */}
            <i className={openState ? 'mobile-nav-icon open' : 'mobile-nav-icon close'}>
                {icon}
            </i>
        </>
    )
}
