import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="Navbar">
        <img
          src={assets.logo}
          alt="logo"
          className="logo"
          style={{ width: "5rem" }}
        />
        <ul className="navbar-menu">
          <li>home</li>
          <li>menu</li>
          <li>mobile-app</li>
          <li>contact-us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>sign in</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
