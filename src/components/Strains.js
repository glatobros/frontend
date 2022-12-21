import React, { useRef } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { get, deleted } from "../services/service";
import axios from "axios";

const Strains = () => {
  const [refresh, setRefresh] = React.useState(false);
  const [strains, setStrains] = React.useState([]);
  const [edibles, setEdibles] = React.useState([]);
  const [preRolls, setPreRolls] = React.useState([]);
  const [cartridges, setCartridges] = React.useState([]);

  const newId = localStorage.getItem("id");

  const strainRef = useRef(null);
  const edibleRef = useRef(null);
  const preRollRef = useRef(null);
  const cartridgesRef = useRef(null);

  const executeScrollToStrain = () =>
    strainRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToEdible = () =>
    edibleRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToPreRoll = () =>
    preRollRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToCartridges = () =>
    cartridgesRef.current.scrollIntoView({
      behavior: "smooth",
    });

  React.useEffect(() => {
    getStrains();
    getEdibles();
    getPreRolls();
    getCartridges();
  }, [refresh]);

  const getStrains = async () => {
    const response = await get("/posts/all-strains");

    setStrains(response.data);
  };

  const getEdibles = async () => {
    const response = await get("/posts/all-edibles");

    setEdibles(response.data);
  };

  const getCartridges = async () => {
    const response = await get("/posts/all-cartridges");

    setCartridges(response.data);
  };

  const getPreRolls = async () => {
    const response = await get("/posts/all-prerolls");

    setPreRolls(response.data);
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
        <Link onClick={executeScrollToStrain} to="#">
          <h4>Strains</h4>
        </Link>
        <Link onClick={executeScrollToEdible} to="#">
          <h4>Edibles</h4>
        </Link>
        <Link onClick={executeScrollToCartridges} to="#">
          <h4>Cartridges</h4>
        </Link>
        <Link onClick={executeScrollToPreRoll} to="#">
          <h4>Pre-rolls</h4>
        </Link>
      </div>

      <div ref={strainRef} className="grinders-section">
        <div className="titles">
          <h1>Strains</h1>
        </div>
        {strains.map((strain) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{strain.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      strain.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{strain.content}</p>
                <div className="remove-btn">
                  {strain.creatorId === newId && (
                    <button onClick={() => deletePost(strain._id)}>
                      Remove
                    </button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={edibleRef} className="grinders-section2">
        <div className="titles">
          <h1>Edibles</h1>
        </div>
        {edibles.map((edible) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{edible.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      edible.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{edible.content}</p>
                <div className="remove-btn">
                  {edible.creatorId === newId && (
                    <button onClick={() => deletePost(edible._id)}>
                      Remove
                    </button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={cartridgesRef} className="grinders-section">
        <div className="titles">
          <h1>Cartridges</h1>
        </div>
        {cartridges.map((cartridge) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{cartridge.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      cartridge.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{cartridge.content}</p>
                <div className="remove-btn">
                  {cartridge.creatorId === newId && (
                    <button onClick={() => deletePost(cartridge._id)}>
                      Remove
                    </button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={preRollRef} className="grinders-section2">
        <div className="titles">
          <h1>Pre-rolls</h1>
        </div>
        {preRolls.map((preRoll) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{preRoll.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      preRoll.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{preRoll.content}</p>
                <div className="remove-btn">
                  {preRoll.creatorId === newId && (
                    <button onClick={() => deletePost(preRoll._id)}>
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

export default Strains;
