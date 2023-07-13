import React, { useState } from "react";
import { Link } from "react-router-dom";
import userImage from "../../assets/user-image.png";
import "./header.scss";

function Header() {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={term}
            placeholder="Enter Movie Name or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>

      <div className="user-image">
        <img src={userImage} alt="user" />
      </div>
    </div>
  );
}

export default Header;
