import React from "react";
import { Link } from "react-router-dom";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import telegram from "../images/telegram.png";
import facebook from "../images/facebook.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-socials">
        <Link to="#">
          <img height="35" src={twitter} alt="Twitter" />
        </Link>
        <Link to="#">
          <img height="35" src={instagram} alt="Instagram" />
        </Link>
        <Link to="#">
          <img height="40" src={telegram} alt="Telegram" />
        </Link>
        <Link to="#">
          <img height="32" src={facebook} alt="Facebook" />
        </Link>
      </div>
      <div className="footer-links">
        <h5>ABOUT G-Latø Brøs</h5>
        <Link to="#">About us</Link>
        <Link to="#">Contact us</Link>
        <Link to="#">FAQs</Link>
      </div>
      <div className="footer-links">
        <h5>SOCIALS</h5>
        <Link to="#">Instagram</Link>
        <Link to="#">Facebook</Link>
        <Link to="#">Telegram</Link>
        <Link to="#">Twitter</Link>
      </div>
      <div className="footer-links">
        <h5>PRIVACY &amp; TERMS</h5>
        <Link to="#">Terms of use</Link>
      </div>
      <div className="footer-links">
        <h5>PRIVACY &amp; TERMS</h5>
        <Link to="#">Terms of use</Link>
      </div>
      <div className="footer-bottom">
        <p>© 2022 G-Latø Brøs</p>
      </div>
    </footer>
  );
};

export default Footer;
