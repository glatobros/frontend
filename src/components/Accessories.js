import React, { useRef } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { get, deleted } from "../services/service";
import axios from "axios";

const Accessories = () => {
  const [refresh, setRefresh] = React.useState(false);
  const [grinders, setGrinders] = React.useState([]);
  const [trays, setTrays] = React.useState([]);
  const [papers, setPapers] = React.useState([]);

  const newId = localStorage.getItem("id");

  const grinderRef = useRef(null);
  const trayRef = useRef(null);
  const paperRef = useRef(null);

  const executeScrollToGrinder = () =>
    grinderRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToTray = () =>
    trayRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToPapers = () =>
    paperRef.current.scrollIntoView({
      behavior: "smooth",
    });

  React.useEffect(() => {
    getGrinders();
    getTrays();
    getPapers();
  }, [refresh]);

  const getGrinders = async () => {
    const response = await get("/posts/all-grinders");

    setGrinders(response.data);
  };

  const getTrays = async () => {
    const response = await get("/posts/all-trays");

    setTrays(response.data);
  };

  const getPapers = async () => {
    const response = await get("/posts/all-papers");

    setPapers(response.data);
  };

  const deletePost = async (postId) => {
    try {
      const response = await deleted(`/sposts/delete/${postId}`);

      console.log(response);
      setRefresh(!refresh);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="accessories-page">
      <div className="dash-cat">
        <Link onClick={executeScrollToGrinder} to="#">
          <h4>Grinders</h4>
        </Link>
        <Link onClick={executeScrollToTray} to="#">
          <h4>Trays</h4>
        </Link>
        <Link onClick={executeScrollToPapers} to="#">
          <h4>Papers</h4>
        </Link>
      </div>

      <div ref={grinderRef} className="grinders-section">
        <div className="titles">
          <h1>Grinders</h1>
        </div>
        {grinders.map((grinder) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{grinder.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      grinder.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{grinder.content}</p>
                <p className="grinders-price">{grinder.price}</p>
                <div className="remove-btn">
                  {grinder.creatorId === newId && (
                    <button onClick={() => deletePost(grinder._id)}>
                      Remove
                    </button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={trayRef} className="grinders-section2">
        <div className="titles">
          <h1>Trays</h1>
        </div>
        {trays.map((tray) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{tray.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      tray.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{tray.content}</p>
                <p className="grinders-price">{tray.price}</p>
                <div className="remove-btn">
                  {tray.creatorId === newId && (
                    <button onClick={() => deletePost(tray._id)}>Remove</button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={paperRef} className="grinders-section">
        <div className="titles">
          <h1>Papers</h1>
        </div>
        {papers.map((paper) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{paper.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      paper.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{paper.content}</p>
                <p className="grinders-price">{paper.price}</p>
                <div className="remove-btn">
                  {paper.creatorId === newId && (
                    <button onClick={() => deletePost(paper._id)}>
                      Remove
                    </button>
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

export default Accessories;
