import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

/** header will contain backround image, search icon, and title of app */

function Header() {
  return (
    <header className="header">
      <div className="header__logo" role="img" aria-label="Logo"></div>
      <nav className="header__nav">
        <Link to="/">Home</Link> | <Link to="/quiz">Composting Quiz</Link> |{" "}
        <Link to="/location">Services by Location</Link>
      </nav>
    </header>
  );
}

export default Header;
