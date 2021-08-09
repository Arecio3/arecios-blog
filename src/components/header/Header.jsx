import React from 'react'
import './header.css'
import Hero from '../../images/headerImg.jpeg'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>Deep</span>
                <span className='headerTitleLg'>Thoughts.</span>
            </div>
            <img className='headerImg' src={Hero} alt="" />
        </div>
    )
}
