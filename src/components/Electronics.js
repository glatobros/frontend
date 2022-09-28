import React, { useRef } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { get, deleted } from "../services/service";
import axios from "axios";

const Electronics = () => {
  const [refresh, setRefresh] = React.useState(false);
  const [vapes, setVapes] = React.useState([]);
  const [ecigs, setEcigs] = React.useState([]);

  const newId = localStorage.getItem("id");

  const vapeRef = useRef(null);
  const ecigRef = useRef(null);

  const executeScrollToVape = () =>
    vapeRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToEcig = () =>
    ecigRef.current.scrollIntoView({
      behavior: "smooth",
    });

  React.useEffect(() => {
    getVapes();
    getEcigs();
  }, [refresh]);

  const getVapes = async () => {
    const response = await get("/posts/all-vapes");

    setVapes(response.data);
  };

  const getEcigs = async () => {
    const response = await get("/posts/all-ecigs");

    setEcigs(response.data);
  };

  const deletePost = async (postId) => {
    try {
      const response = await deleted(`/posts/delete/${postId}`);

      console.log(response);
      setRefresh(!refresh);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="accessories-page">
      <div className="dash-cat">
        <Link onClick={executeScrollToVape} to="#">
          <h4>Vapes</h4>
        </Link>
        <Link onClick={executeScrollToEcig} to="#">
          <h4>E-cigs</h4>
        </Link>
      </div>

      <div ref={vapeRef} className="grinders-section">
        <div className="titles">
          <h1>Vapes</h1>
        </div>
        {vapes.map((vape) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{vape.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      vape.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{vape.content}</p>
                <p className="grinders-price">{vape.price}</p>
                <div className="remove-btn">
                  {vape.creatorId === newId && (
                    <button onClick={() => deletePost(vape._id)}>Remove</button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={ecigRef} className="grinders-section2">
        <div className="titles">
          <h1>E-cigs</h1>
        </div>
        {ecigs.map((ecig) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{ecig.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      ecig.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{ecig.content}</p>
                <p className="grinders-price">{ecig.price}</p>
                <div className="remove-btn">
                  {ecig.creatorId === newId && (
                    <button onClick={() => deletePost(ecig._id)}>Remove</button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Electronics;
