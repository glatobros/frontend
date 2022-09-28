import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
    navigate("/");
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/accessories">
          <MenuItem onClick={handleClose}>Accessories</MenuItem>
        </Link>
        <Link to="/strains">
          <MenuItem onClick={handleClose}>Strains</MenuItem>
        </Link>
        <Link to="/electronics">
          <MenuItem onClick={handleClose}>Electronics</MenuItem>
        </Link>

        {token && (
          <Link to="/adminpost">
            <MenuItem onClick={handleClose}>Make post</MenuItem>
          </Link>
        )}
        {token && (
          <button className="logout-menu" onClick={logout}>
            Log Out
          </button>
        )}
      </Menu>
    </div>
  );
}
