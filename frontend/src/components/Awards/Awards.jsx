import React from "react";
import "./Awards.css";
import { assets } from "../../assets/assets";

const Awards = () => {
  return (
    <div className="awards" id="awards">
      <h1>Our Achievments</h1>
      <div className="awards-section-layout">
        <div className="awards-section">
          <div className="awards-img">
            <img src={assets.news_1} alt="" />
          </div>
          <div className="awards-img">
            <img src={assets.news_2} alt="" />
          </div>
          <div className="awards-img">
            <img src={assets.awards_1} alt="" />
          </div>
          <div className="awards-img">
            <img src={assets.awards_2} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Awards;
