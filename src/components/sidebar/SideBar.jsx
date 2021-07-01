import React from "react";
import Me from "../../images/aboutAuthor.jpeg";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Author</span>
        <img className='sidebarImg' src={Me} alt="" />
        <p>
          Hey! My name is <strong>Arecio Canton</strong> and I created Deep
          Thoughts not just as a way to sharpen my skills as a full-stack
          developer but to also be able to create a site where I can read on
          other people's deep opinions about certain subjects and also give
          mine.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Philosophy</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Fashion</li>
          <li className="sidebarListItem">Cars</li>
          <li className="sidebarListItem">Technology</li>
          <li className="sidebarListItem">Politics</li>
          <li className="sidebarListItem">Psychology</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Food</li>
          <li className="sidebarListItem">Video Games</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square" id="facebookIcon"></i>
          <i className="sidebarIcon fab fa-twitter-square" id="twitterIcon"></i>
          <i className="sidebarIcon fab fa-instagram" id="igIcon"></i>
          <i className="sidebarIcon fab fa-pinterest-square" id="pintrestIcon"></i>
          <i className="sidebarIcon fab fa-snapchat-square" id="snapIcon"></i>
        </div>
      </div>
    </div>
  );
}
