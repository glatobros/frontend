import React from "react";
import axios from "axios";
import { post } from "../services/service";
import Loader from "./Loader";

const Post = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [postPic, setPostPic] = React.useState("");
  const [category, setCategory] = React.useState(""); //THIS IS MY HOOK FOR CATEGORIES
  const [quality, setQuality] = React.useState("");
  const [isRecommended, setIsRecommended] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const createPost = async (e) => {
    e.preventDefault();
    if (!title || !category || !content) {
      setStatus("Please enter all required fields");
    } else {
      try {
        const response = await post("/posts/create", {
          title: title,
          content: content,
          price: price ? "$" + price : "",
          postPic: postPic,
          typeOfCategory: category,
          quality: quality,
          recommended: isRecommended,
        });
        console.log("DATA", response.data);

        window.location.reload(false);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const handleFileUpload = async (e) => {
    try {
      setLoading(true);
      const uploadData = new FormData();
      uploadData.append("imageUrl", e.target.files[0]);

      let response = await post("/posts/add-picture", uploadData);
      setPostPic(response.data.path);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setLoading(false);
      setStatus("Image must be .png, .jpeg, or .webp");
    }
  };

  return (
    <div className="post-page">
      <form className="login-inputs" onSubmit={createPost}>
        <h1 className="post-title">Create post</h1>
        <input
          placeholder="Title..."
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={23}
        />
        <div className="postpic-img-section">
          <img
            className="postpic-img"
            src={
              postPic ||
              "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
            }
            alt="Profile Picture"
          />
        </div>
        <textarea
          placeholder="Content..."
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={50}
        />

        {/* <input
          placeholder="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        /> */}

        <label htmlFor="file-upload" className="custom-file-upload">
          <i className="fa fa-cloud-upload">
            <img
              src="https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-22.png"
              alt="Upload"
              height="20"
            />
            Custom Upload
          </i>
        </label>
        <input id="file-upload" type="file" onChange={handleFileUpload} />

        <input
          className="price-input"
          placeholder="$0"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* THIS IS WHERE IM TRYING TO MAKE THE DROPDOWN OF THE CATEGORIES */}
        <div className="dropdowns">
          <select
            className="post-select"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Category</option>
            <option value="strains">Strains</option>
            <option value="edibles">Edibles</option>
            <option value="grinders">Grinders</option>
            <option value="cartridges">Cartridges</option>
            <option value="vapes">Vapes</option>
            <option value="e-cigs">E-cigs</option>
            <option value="papers">Papers</option>
            <option value="pre-rolls">Pre-rolls</option>
            <option value="trays">Trays</option>
          </select>

          <select
            className="post-select"
            onChange={(e) => setQuality(e.target.value)}
          >
            <option>Quality</option>
            <option value="top-shelf">Top-shelf</option>
            <option value="mid-shelf">Mid-shelf</option>
            <option value="low-shelf">Low-shelf</option>
          </select>
        </div>

        <div className="checkbox-wrapper">
          <label>
            <span>Recommended</span>
            <input
              type="checkbox"
              checked={isRecommended}
              onChange={() => setIsRecommended((prev) => !prev)}
            />
          </label>
        </div>

        <button disabled={loading}>Submit</button>
        <p className="login-status">{status}</p>
      </form>
      {loading && <Loader />}
      {/* <Loader /> */}
    </div>
  );
};

export default Post;
