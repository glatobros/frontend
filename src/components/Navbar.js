import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Search from "./Search";
import BasicMenu from "./Drawer";
import useWindowSize from "./WindowSize";

const Navbar = () => {
  const { pathname } = useLocation();
  const size = useWindowSize();
  return (
    <nav>
      {size.width >= 768 && (
        <Link to="/" className="logo">
          <h1>G-Latø Brøs</h1>
        </Link>
      )}
      <div className={size.width >= 768 ? "nav-line" : "nav-line-none"}></div>
      {size.width >= 768 && (
        <div className="nav-bottom">
          <Link
            className={pathname === "/accessories" ? "active" : ""}
            to="/accessories"
          >
            Accessories
          </Link>
          <Link
            className={pathname === "/strains" ? "active" : ""}
            to="/strains"
          >
            Strains
          </Link>
          <Link
            className={pathname === "/electronics" ? "active" : ""}
            to="/electronics"
          >
            Electronics
          </Link>
        </div>
      )}

      <Search />

      {size.width <= 767 ? (
        // <TemporaryDrawer />
        <BasicMenu />
      ) : (
        <a className="telegram-link" href="#">
          Join Our Telegram
        </a>
      )}
    </nav>
  );
};

export default Navbar;
