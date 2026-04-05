import React, { useState } from "react";
import "./Guests.css";
import { guests_gallery } from "../../assets/assets";

const Guests = () => {
  return (
    <div className="celebrity-gallery">
      <h2 className="gallery-title">Our Guests</h2>

      <div className="gallery-grid">
        {guests_gallery.map((item) => (
          <div className="gallery-card" key={item._id}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guests;
