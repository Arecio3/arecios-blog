import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <a
            href="https://www.facebook.com/arecio.canton.1"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="topIcon fab fa-facebook-square" id="facebookIcon"></i>
          </a>
          <a
            href="https://twitter.com/Papichulo813"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="topIcon fab fa-twitter-square" id="twitterIcon"></i>
          </a>
          <a
            href="https://www.instagram.com/areciooo/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="topIcon fab fa-instagram" id="igIcon"></i>
          </a>
          <a
            href="https://www.pinterest.com/areciocanton/_saved/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i
              className="topIcon fab fa-pinterest-square"
              id="pintrestIcon"
            ></i>
          </a>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                Dashboard
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                Write
              </Link>
            </li>
            {user && (
              <li className="topListItem" onClick={handleLogout}>
                Logout
              </li>
            )}
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link className="link" to="/settings">
              <img className="topImg" src={PF + user.profilePic} alt="" />
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
      <div className="mobileNav">
        <label className='mobileLabel 'htmlFor="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <div className="mobileMenu">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link" to="/write">
                Write
              </Link>
            </li>
            {user && (
              <li onClick={handleLogout}>
                Logout
              </li>
            )}
          </ul>
        </div>
        <div className="mobileMenu">
          {user ? (
            <Link className="link" to="/settings">
              <img className="topImg" src={PF + user.profilePic} alt="" />
            </Link>
          ) : (
            <ul>
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
