import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="footer-logo" />
          <p>
            Welcome to our Restaurant, where great food meets a warm and
            friendly atmosphere. We are dedicated to serving delicious dishes
            made with fresh ingredients and authentic flavors. Whether you're
            dining with family, friends or colleagues, we strive to make every
            visit a memorable experience.
          </p>
          <div className="footer-social-icons">
            <h2>Follow Us</h2>
            <a
              href="https://www.instagram.com/sardar_biryani_official_?igsh=MWhncWN3eThtdHFh"
              target="_blank"
            >
              <img src={assets.insta_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Restaurant</h2>
          <p>
            <span> Address: </span>Talegaon Dhamdhere Road, Talegaon Dhamdhere,
            Tal. Shirur, Dis. Pune
          </p>
          <h2>Opening Hours</h2>
          <p>
            <span>Timing: </span> 12:00 AM - 11:00 PM
          </p>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91 84593 32597</li>
            <li>+91 97674 30061</li>
            <li>+91 98508 11583</li>
            <li>+91 72494 91583</li>
            <li>+91 98238 11583</li>
            <li>+91 76665 35966</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
