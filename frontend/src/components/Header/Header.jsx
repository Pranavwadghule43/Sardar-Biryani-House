import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <div className="header-contents">
        <h2>Order your favourite food here.</h2>
        <p>
          North Indian, Chinese, Kebab, Mughlai, Seafood, Desserts, Beverages.
          Everything at your finger tips.
        </p>
      </div>
    </div>
  );
};

export default Header;
