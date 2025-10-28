import React from "react";
import "./Home.css";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="main-hero">
        <div className="conside"></div>
        <section className="hero">
          <div className="hero-content">
            <div className="Dgaid">
              <h1>DG</h1>
              <h1 className="Aid">AID</h1>
            </div>
            <p>
              Unlock Your Digital Potential. Explore<br />Our Premium Projects – Starting at Just ₹999
            </p>

            {/* Buttons Section */}
            <div className="hero-buttons">
              <Link to="/ContactUs"><button className="btn-primary">Contact Us</button></Link>
      
              
              <a
                href="https://wa.me/917517043042?text=Hi%2C%20I%20am%20interested%20in%20your%20projects"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp 
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explore Project Fields</h2>
        <div className="category-grid">
           {data.categories.map((item) => {
            const Icon = FaIcons[item.icon]; // 👈 Dynamically get icon component
            return (
              <Link to="/projects" key={item.title}>
                <div className="category-card">
                  {Icon && <Icon size={40} color="#2c3e50" />} {/* Render icon */}
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase">
        <h2>Ready to Showcase Your Talent?</h2>
        <p>
          Join our growing community of student creators. List your projects and
          connect with buyers eager to support your innovation.
        </p>
        <Link to="/formproject" className="btn-secondary">
          List Your Project Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
