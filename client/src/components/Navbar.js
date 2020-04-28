import React from "react";
import { Link } from "react-router-dom";
import Pricing from "./Pricing.js"
import Features from "./Features.js"
import Contact from "./Contact.js";
import Download from "./Download.js";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="current-tab-highlight navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="Home">
        tindog
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link to={Download} className="nav-link">
              Download
            </Link>
          </li>
          <li className="nav-item">
            <Link to={Features} className="nav-link">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to={Pricing} className="nav-link">
              Pricing
            </Link>
          </li>
            <li className="nav-item">
            <Link to={Contact} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
