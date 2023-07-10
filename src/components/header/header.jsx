import React from "react";
import { Link } from "react-router-dom";
import userImage from "../../assets/user-image.png";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>

      <div className="user-image">
        <img src={userImage} alt="user" />
      </div>
    </div>
  );
}

export default Header;
