import React from 'react'
import selfie from '../../images/selfieImg.jpg'
import './navbar.css'

export default function NavBar() {
    return (
        <div>
            <div className="top">
               <div className="topLeft">
                   <i className="fab fa-facebook-square facebookIcon"></i>
                   <i className="fab fa-twitter-square twitterIcon"></i>
                   <i className="fab fa-instagram igIcon"></i>
                   <i className="fab fa-pinterest-square pintrestIcon"></i>
                   <i className="fab fa-snapchat-square snapIcon"></i>
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
