import React, { useState } from "react";
import "./NavbarStyle.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="" />
            </Link>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#ffffff" }}></FaTimes>
            ) : (
              <FaBars size={20} style={{ color: "#ffffff" }}></FaBars>
            )}
          </div>
        </nav>
      </header>
      <nav className="fake-nav"></nav>
    </>
  );
};

export default Navbar;
