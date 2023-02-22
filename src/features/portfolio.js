import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="single-slide">
        <div className="portfolio-leftside">
          <div className="image-card-container">
            <div className="image-card-right">
              <div className="image-card">
                <img
                  src="https://yakraj.com/images/data-entry.png"
                  alt="google"
                />
              </div>
              <h1>INDUSTRIAL</h1>
            </div>
            <h1>DATA ENTRY</h1>
          </div>
          <div className="app-description">
            <p>
              <span> “ </span>
              This is very special web applicaton for company level, which is
              acccessable from anywhere with major Privacy, once you login
              through your own crediantials you willl be allowed to see and make
              changes on app.
              <span> ”</span>
            </p>
          </div>
        </div>
        <div className="portfolio-rightside">
          {/* creating key here */}
          <div className="keys-text-continer">
            <div className="key-container">
              <div className="key-holder" />
              <div className="key-shaft">Keys</div>
            </div>
            <h1>Responsive</h1>
          </div>
          <hr style={{ width: "70%", height: "2px" }} />
          <h1 className="gallerytext">Gallery</h1>
          <div className="images-slide">
            <img src="https://yakraj.com/images/data-entry.png" alt="google" />
            <img src="https://yakraj.com/images/data-entry.png" alt="google" />
            <img src="https://yakraj.com/images/data-entry.png" alt="google" />
            <img src="https://yakraj.com/images/data-entry.png" alt="google" />
          </div>
        </div>
      </div>
    </div>
  );
};
