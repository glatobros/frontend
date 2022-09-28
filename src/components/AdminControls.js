import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Post from "./Post";
import useWindowSize from "./WindowSize";

const AdminControls = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const size = useWindowSize();

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
    navigate("/");
  };

  return token ? (
    <div className={size.width >= 768 ? "controls" : "no-controls"}>
      <h4>Admin</h4>
      <Link to="/adminpost">Make a post</Link>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  ) : null;
};

export default AdminControls;
