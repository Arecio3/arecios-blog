import React, { useState, useEffect } from "react";
import Me from "../../images/aboutAuthor.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

export default function SideBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sideBar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Author</span>
        <img className="sidebarImg" src={Me} alt="" />
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
          {categories.map((category, index) => (
            <Link  key={index} className='link' to={`/?category=${category.name}`}>
              <li className="sidebarListItem">
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        <div className="sidebarSocial">
          <i
            className="sidebarIcon fab fa-facebook-square"
            id="facebookIcon"
          ></i>
          <i className="sidebarIcon fab fa-twitter-square" id="twitterIcon"></i>
          <i className="sidebarIcon fab fa-instagram" id="igIcon"></i>
          <i
            className="sidebarIcon fab fa-pinterest-square"
            id="pintrestIcon"
          ></i>
          <i className="sidebarIcon fab fa-snapchat-square" id="snapIcon"></i>
        </div>
      </div>
    </div>
  );
}
