import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { get, deleted } from "../services/service";
import Footer from "./Footer";
import banner from "../images/banner.jpeg";
import grinder from "../images/grinder.webp";
import tray from "../images/tray.png";
import vape from "../images/vape.png";
import strains from "../images/strains.webp";
import cart from "../images/cart.png";
import paper from "../images/rollingpaper.jpeg";
import prerolls from "../images/prerolls.png";
import gummies from "../images/gummies.webp";
import mac from "../images/pineapplemac.png";
import ecig from "../images/ecig.png";

const Home = () => {
  const [top, setTop] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);

  const newId = localStorage.getItem("id");

  const navigate = useNavigate();

  React.useEffect(() => {
    getTop();
  }, [refresh]);

  const getTop = async () => {
    const response = await get("/posts/all-top");

    setTop(response.data);
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
    <div className="home-page">
      <div className="home-banner">
        <img className="banner-img" src={banner} alt="" />
        <div className="text-on-banner">
          <h1>Need weed?</h1>
          <Link to="/strains">
            <button>Start Browsing</button>
          </Link>
          <p>Find the best accessories, strains, and electronics here!</p>
        </div>
      </div>
      <h2 className="section-names">Categories</h2>
      <div className="home-category">
        <Link to="/strains">
          <div className="allcats">
            <img src={strains} alt="" />
            <h4>Strains</h4>
          </div>
        </Link>
        <Link to="/strains">
          <div className="allcats">
            <img src={cart} alt="" />
            <h4>Cartridges</h4>
          </div>
        </Link>
        <Link to="/strains">
          <div className="allcats">
            <img src={gummies} alt="" />
            <h4>Edibles</h4>
          </div>
        </Link>
        <Link to="/electronics">
          <div className="allcats">
            <img src={vape} alt="" />
            <h4>Vapes</h4>
          </div>
        </Link>
        <Link to="/electronics">
          <div className="allcats">
            <img src={ecig} alt="" />
            <h4>E-cigs</h4>
          </div>
        </Link>
        <Link to="/accessories">
          <div className="allcats">
            <img src={grinder} alt="" />
            <h4>Grinders</h4>
          </div>
        </Link>
        <Link to="/accessories">
          <div className="allcats">
            <img src={tray} alt="" />
            <h4>Trays</h4>
          </div>
        </Link>
        <Link to="/accessories">
          <div className="allcats">
            <img src={paper} alt="" />
            <h4>Papers</h4>
          </div>
        </Link>
        <Link to="/strains">
          <div className="allcats">
            <img src={prerolls} alt="" />
            <h4>Pre-rolls</h4>
          </div>
        </Link>
      </div>
      <div className="home-welcome">
        <div className="home-welcome-name">
          <h1>Welcome to G-Latø Brøs</h1>
          <p>Best place to browse smoking essentials.</p>
        </div>
        <div className="promote-sections">
          <div className="allpromote">
            <h3>Make smoking easy</h3>
            <p>Learn and find all you need about weed here!</p>
          </div>
          <div className="allpromote">
            <h3>Join our Telegram</h3>
            <p>Get the latest updates with our weekly newsletter!</p>
          </div>
          <div className="allpromote">
            <h3>A weed community</h3>
            <p>A community built by weed lovers for weed lovers!</p>
          </div>
        </div>
      </div>
      <div className="top-strains-title">
        <h2>Top strains today!</h2>
        <p>We recommmend these!</p>
      </div>
      <div className="top-strains-home">
        {top.map((topthree) => {
          return (
            <div className="home-top-sections">
              <h3>{topthree.title}</h3>
              {/* <div className="post-img-box"> */}
              <img
                src={
                  topthree.postPic ||
                  "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                }
                alt=""
              />
              {/* </div> */}
              <Link to="#">
                <button className="order-btn">Order now</button>
              </Link>

              <div className="remove-btn">
                {topthree.creatorId === newId && (
                  <button onClick={() => deletePost(topthree._id)}>
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* <div className="home-top-sections">
          <img src={mac} alt="" />
          <h4>Pineapple MAC</h4>
          <button>Order now</button>
        </div>
        <div className="home-top-sections">
          <img src={mac} alt="" />
          <h4>Pineapple MAC</h4>
          <button>Order now</button>
        </div>
        <div className="home-top-sections">
          <img src={mac} alt="" />
          <h4>Pineapple MAC</h4>
          <button>Order now</button>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
