import React from "react";
import "./HeroStyle.css";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1>
              <span className="primary-color">Online Business</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eos
              molestiae quo beatae officia asperiores sunt deserunt distinctio
              voluptas pariatur!
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <i>
                  <FaDatabase></FaDatabase> Staxx
                </i>
                <i>
                  <FaAsterisk></FaAsterisk> Star AI
                </i>
                <i>
                  <FaAccusoft></FaAccusoft> Accusoft
                </i>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-txt">Sign in with</p>
                <div className="social-login">
                  <i>
                    <FaFacebook size={20}></FaFacebook>
                  </i>
                  <i>
                    <FaTwitter size={20}></FaTwitter>
                  </i>
                  <i>
                    <FaGithub size={20}></FaGithub>
                  </i>
                </div>
                <div className="divider">
                  <p>
                    <span>Or</span>
                  </p>
                </div>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                </form>
                <button>Create your Account</button>
              </div>
              <div className="form-footer">
                <p>
                  By signing up, you agree to our
                  <span className="primary-color">Terms, Data policy</span> and
                  <span className="primary-color">Cookies policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
