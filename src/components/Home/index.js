import "./index.css";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <h1 className="home-h1">
          Best Website <br /> Builders in the world{" "}
        </h1>
        <p className="home-para">
          We offer you the most of what can be offered!
        </p>
        <Link to="/About">
          <button className="home-button">Explore it</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
