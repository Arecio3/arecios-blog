import React from "react";
import Nature from "../../images/natureBlogPic.jpeg";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={Nature} alt="" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Test Title</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDescription'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A et totam
        animi explicabo saepe magni libero sit temporibus aperiam maxime
        voluptatum ipsum, dicta magnam enim, optio in quo, praesentium
        laboriosam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A et totam
        animi explicabo saepe magni libero sit temporibus aperiam maxime
        voluptatum ipsum, dicta magnam enim, optio in quo, praesentium
        laboriosam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A et totam
        animi explicabo saepe magni libero sit temporibus aperiam maxime
        voluptatum ipsum, dicta magnam enim, optio in quo, praesentium
        laboriosam.
      </p>
    </div>
  );
}
