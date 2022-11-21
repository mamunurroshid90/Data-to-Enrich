import React from "react";
import { FaDatabase } from "react-icons/fa";
import "./testimonialStyle.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase></FaDatabase>Staxx
            </i>
            <p className="body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae eius consequatur iste, placeat eveniet itaque?
            </p>
            <div className="name">
              <p>Marie chilvers</p>
              <p>CEO, Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
