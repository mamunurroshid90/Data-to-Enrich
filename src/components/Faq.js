import React from "react";
import "./FaqStyle.css";

const Faq = () => {
  return (
    <div className="section-faq">
      <div className="container">
        <div className="col-1">
          <h3>Frequently asked questions</h3>
          <p>Can't find the answer you're looking for</p>
          <p>
            Reach out to our <span>Customer support</span>Team.
          </p>
        </div>
        <div className="col-2">
          <div className="faq">
            <h5>How do you make holy water?</h5>
            <p>You boil the hell out of it. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq">
            <h5>How do you make holy water?</h5>
            <p>You boil the hell out of it. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq">
            <h5>How do you make holy water?</h5>
            <p>You boil the hell out of it. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq">
            <h5>How do you make holy water?</h5>
            <p>You boil the hell out of it. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
