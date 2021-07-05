import React from "react";
import Nature from "../../images/natureBlogPic.jpeg";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = 'http://localhost:5000/images/'
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((category) => (
            <span className="postCat">{category.name}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  );
}
