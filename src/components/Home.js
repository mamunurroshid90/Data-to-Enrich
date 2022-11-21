import React from "react";
import Contact from "./Contact";
import Faq from "./Faq";
import Footer from "./Footer";
import Hero from "./Hero";
import "./HomeStyle.css";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
