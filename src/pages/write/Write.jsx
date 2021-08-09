import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      // Prevents user from uploading different image with same name
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error(err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id)
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="write">
        {file && 
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />

        }
      <form className="writeBlogForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          {/* Label replaces ugly choose file button */}
          <label htmlFor="fileInput">
            <i className="addImgIcon far fa-file-image"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Speak your mind..."
            type="text"
            className="writeInput writeText"
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
