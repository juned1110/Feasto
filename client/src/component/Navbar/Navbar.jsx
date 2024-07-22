import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  return (
    <React.Fragment>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            contact-us
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}>
              {food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <React.Fragment>
                      <div className="cart-items-title cart-items-item">
                        <p>{cartItems[item._id] > 4 ? "4+" : cartItems[item._id]}</p>
                      </div>
                      <hr />
                    </React.Fragment>
                  );
                }
              })}
            </div>
          </div>
          <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
