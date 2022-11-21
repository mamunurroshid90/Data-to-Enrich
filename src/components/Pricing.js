import React from "react";
import "./PricingStyle.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">
        <div className="top-content">
          <div>
            <h2>
              Everything you need for <span> $99 a month</span>
            </h2>
            <p>
              Including every feature we offer plus unlimited projects unlimited
              users.
            </p>
          </div>
          <div className="btn-div">
            <button>Get Started today</button>
          </div>
        </div>
        <div className="bottom-content">
          <div className="card">
            <p>
              <span>Everything you need</span>
            </p>
            <h3>All-in-one platform</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem obcaecati dicta ullam illo nemo perferendis.
            </p>
          </div>
          <div className="card">
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
