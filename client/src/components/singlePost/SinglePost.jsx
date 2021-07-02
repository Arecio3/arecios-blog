import React from "react";
import Nature from "../../images/natureBlogPic.jpeg";
import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={Nature} alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Arecio</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad
          adipisci, obcaecati iure culpa nisi magnam rem molestias, impedit
          dolores nostrum sint hic exercitationem officiis enim! Quibusdam
          perspiciatis officia ad.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad
          adipisci, obcaecati iure culpa nisi magnam rem molestias, impedit
          dolores nostrum sint hic exercitationem officiis enim! Quibusdam
          perspiciatis officia ad.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad
          adipisci, obcaecati iure culpa nisi magnam rem molestias, impedit
          dolores nostrum sint hic exercitationem officiis enim! Quibusdam
          perspiciatis officia ad.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad
          adipisci, obcaecati iure culpa nisi magnam rem molestias, impedit
          dolores nostrum sint hic exercitationem officiis enim! Quibusdam
          perspiciatis officia ad.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad
          adipisci, obcaecati iure culpa nisi magnam rem molestias, impedit
          dolores nostrum sint hic exercitationem officiis enim! Quibusdam
          perspiciatis officia ad.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad
          adipisci, obcaecati iure culpa nisi magnam rem molestias, impedit
          dolores nostrum sint hic exercitationem officiis enim! Quibusdam
          perspiciatis officia ad.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad
          adipisci, obcaecati iure culpa nisi magnam rem molestias, impedit
          dolores nostrum sint hic exercitationem officiis enim! Quibusdam
          perspiciatis officia ad.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad
          adipisci, obcaecati iure culpa nisi magnam rem molestias, impedit
          dolores nostrum sint hic exercitationem officiis enim! Quibusdam
          perspiciatis officia ad.
        </p>
      </div>
    </div>
  );
}
