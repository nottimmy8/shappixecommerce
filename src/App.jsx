import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Topselect from "./components/Topselect";
import Newarrival from "./components/Newarrival";
import Newsletter from "./components/Newsletter";
import Topdeals from "./components/Topdeals";
import Latest from "./components/Latest";
import Newarrivaldata from "./constants/Newarrivaldata";
import Testimonial from "./components/Testimonial";
import Scan from "./components/scan";
import Address from "./components/Address";
import Footer from "./components/Footer";
import Shopcategories from "./components/Shopcategories";
import Login from "./components/Login";
import Shopjewelry from "./components/shopjewelry";

const App = () => {
  return (
    <div>
      {" "}
      {/* <Login /> */}
      <Navbar />
      {/* <Shopcategories /> */}
      <Shopjewelry />
      {/* <Hero />
      <Topselect />
      <Newarrival />
      <Newsletter />
      <Topdeals />
      <Latest />
      <Newarrivaldata />
      <Testimonial />
      <Scan />
      <Address />
     */}
      <Footer />
    </div>
  );
};

export default App;
