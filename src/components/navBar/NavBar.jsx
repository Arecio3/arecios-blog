import React from "react";
import { Link } from "react-router-dom";
import selfie from "../../images/selfieImg.jpg";
import "./navbar.css";

export default function NavBar() {
  const user = false;
  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square" id="facebookIcon"></i>
          <i className="topIcon fab fa-twitter-square" id="twitterIcon"></i>
          <i className="topIcon fab fa-instagram" id="igIcon"></i>
          <i className="topIcon fab fa-pinterest-square" id="pintrestIcon"></i>
          <i className="topIcon fab fa-snapchat-square" id="snapIcon"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                About
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                contact
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                Write
              </Link>
            </li>
            {user && <li className="topListItem">Logout</li>}
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link className="link" to="/settings">
              <img className="topImg" src={selfie} alt="" />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
          <i className="fas fa-search searchIcon"></i>
        </div>
      </div>
    </div>
  );
}
