import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img className="logo" src={assets.logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae dolorum animi suscipit vel eos ab vitae blanditiis
              temporibus similique. Magnam maxime fugit aperiam doloremque ut
              explicabo quaerat neque commodi incidunt.
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delievery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91-123456789</li>
              <li>Contact@feasto.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 © Feasto.com - All Right Reserved.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
