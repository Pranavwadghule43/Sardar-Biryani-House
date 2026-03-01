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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi
            ipsum placeat aliquid earum cumque, omnis, a delectus reiciendis est
            repellat. Tempore dolore ea, fuga nihil temporibus repellat
            exercitationem alias quos harum consequuntur, quisquam voluptate
            perferendis aliquam minus necessitatibus animi.
          </p>
          <div className="footer-social-icons">
            <a href="#"><img src={assets.insta_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Restaurant</h2>
          <p>
            <span> Address: </span>Talegaon Dhabade Road, Talegaon Dhabade, Tal.
            Shirur, Dis. Pune
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
            <li>contact email</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
