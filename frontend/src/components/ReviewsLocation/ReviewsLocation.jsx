import React from "react";
import "./ReviewsLocation.css";

const ReviewsLocation = () => {
  return (
    <div className="reviews-location">
      <div className="reviews">
        <h1>Customer Reviews</h1>
        <div className="review-content">
          <p>
            <b>What Our Guests Say?</b>
          </p>
          <p className="review-content-info">
            View our latest reviews/feedbacks from our guests itself on your
            official instagram profile.
          </p>
          <a
            href="https://www.instagram.com/sardar_biryani_official_?igsh=MWhncWN3eThtdHFh"
            target="_blank"
          >
            <b>Learn More</b>
          </a>
        </div>
      </div>
      <div className="location">
        <h1>Location</h1>
        <div className="map-location">
            {/* <iframe src="#" frameBorder="0"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.261784524527!2d74.14305312519481!3d18.652245082467058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2d90d6a1df8d1%3A0x2a76973a9094eabb!2sSARDAR%20BIRYANI%20HOUSE%20AND%20FAMILY%20RESTAURANT!5e0!3m2!1sen!2sin!4v1775286871299!5m2!1sen!2sin" allowFullScreen="" loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ReviewsLocation;

//  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"