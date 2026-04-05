import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#menu-card"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-us")}
          className={menu === "Contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
        <a
          href="#ambiance"
          onClick={() => setMenu("Ambiance")}
          className={menu === "Ambiance" ? "active" : ""}
        >
          Ambiance
        </a>
        <a
          href="#awards"
          onClick={() => setMenu("Awards")}
          className={menu === "Awards" ? "active" : ""}
        >
          Awards
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
