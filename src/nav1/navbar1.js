import React, { useState } from "react";
import "./navbar1.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitter
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>

      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>P</span>radeep
            <span>M</span>aurya
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="#"  >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"  >
                <FaTwitter className="twitter" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>


        </div>
      </nav >
      {/* hero section  */}
      {
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Pradeep MAurya</h1>
        </section>
      }
    </>
  );
};

export default Navbar;