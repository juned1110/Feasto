import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="header-contents">
          <h2>Order your favourite food here</h2>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Satisfy
            your craving and elevate your dinig experience, one delicious meal
            at a time.
          </p>
          <button>View Menu</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
