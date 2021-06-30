import React from 'react'
import selfie from '../../images/selfieImg.jpg'
import './navbar.css'

export default function NavBar() {
    return (
        <div>
            <div className="top">
               <div className="topLeft">
                   <i className="topIcon fab fa-facebook-square" id='facebookIcon'></i>
                   <i className="topIcon fab fa-twitter-square" id='twitterIcon'></i>
                   <i className="topIcon fab fa-instagram" id='igIcon'></i>
                   <i className="topIcon fab fa-pinterest-square" id='pintrestIcon'></i>
                   <i className="topIcon fab fa-snapchat-square" id='snapIcon'></i>
               </div>
               <div className="topCenter">
                   <ul className="topList">
                       <li className='topListItem'>Home</li>
                       <li className='topListItem'>About</li>
                       <li className='topListItem'>Contact</li>
                       <li className='topListItem'>Write</li>
                       <li className='topListItem'>Logout</li>
                   </ul>
               </div>
               <div className="topRight">
                   <img className='topImg' src={selfie} alt="" />
                   <i className="fas fa-search"></i>
               </div>
            </div>
        </div>
    )
}
