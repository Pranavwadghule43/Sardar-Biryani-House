import React, { useState } from "react";
import "./Guests.css";
import guests_1 from "../../assets/guests_1.png";
import guests_2 from "../../assets/guests_2.png";
import guests_3 from "../../assets/guests_3.png";
import guests_4 from "../../assets/guests_4.png";
import guests_5 from "../../assets/guests_5.png";
import guests_6 from "../../assets/guests_6.png";
import guests_7 from "../../assets/guests_7.png";
import guests_8 from "../../assets/guests_8.png";

const Guests = () => {
  const guests_gallery = [
    {
      _id: "1",
      image: guests_1,
    },
    {
      _id: "2",
      image: guests_2,
    },
    {
      _id: "3",
      image: guests_3,
    },
    {
      _id: "4",
      image: guests_4,
    },
    {
      _id: "5",
      image: guests_5,
    },
    {
      _id: "6",
      image: guests_6,
    },
    {
      _id: "7",
      image: guests_7,
    },
    {
      _id: "8",
      image: guests_8,
    },
  ];

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
