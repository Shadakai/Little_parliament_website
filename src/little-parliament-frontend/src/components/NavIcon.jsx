import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

export default function NavIcon(props) {
    const { openState } = props
    const icon = openState ? <IoMdClose size='24px' /> : <AiOutlineMenu size='24px' />
    return (
        <>
            <i className={openState ? 'mobile-nav-icon open' : 'mobile-nav-icon close'}>
                {icon}
            </i>
        </>
    )
}
