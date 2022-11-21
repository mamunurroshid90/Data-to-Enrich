import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./ContactStyle.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div>
              <h2>Get in touch</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, expedita.
              </p>
            </div>
            <div className="address">
              <p>742 evergreen terrace</p>
              <p>SpringField or 12345</p>
            </div>
            <div className="icons">
              <FaPhone style={{ marginRight: "1rem" }}></FaPhone>
              <p>+1 (555) 123--4567</p>
            </div>
            <div className="icons">
              <FaEnvelope style={{ marginRight: "1rem" }}></FaEnvelope>
              <p>support@example.com</p>
            </div>
            <div className="careers">
              <p>
                Looking for careers <span>view all jobs openings</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form action="">
            <input type="text" placeholder="Full time" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
            <textarea
              name="name"
              placeholder="message"
              cols="30"
              rows="10"
            ></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                By checking box, you agree to the <span>Privacy Policy</span>and{" "}
                <span>cookie Policy</span>.
              </p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
