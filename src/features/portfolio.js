import React, { useState, useEffect, useRef } from "react";
import "../styles/portfolio.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const SingleSlide = () => {
  return (
    <>
      <div className="single-slide">
        <div className="portfolio-leftside">
          <div className="image-card-container">
            <div className="image-card-right">
              <div className="imagecard-parent">
                <div className="image-card grid-first-child">
                  <img
                    src="https://yakraj.com/images/data-entry.png"
                    alt="google"
                  />
                </div>
                <div className="grid-third-child">
                  <h1>INDUSTRIAL</h1>
                </div>
                <div className="grid-second-child">
                  <h1>DATA ENTRY</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-rightside">
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
          {/* creating key here */}
          {/* <div className="keys-text-continer">
            <div className="key-container">
              <div className="key-holder" />
              <div className="key-shaft">Keys</div>
            </div>
            <h1>Responsive</h1>
          </div>
          <hr style={{ width: "70%", height: "2px" }} /> */}
          <h1 className="gallerytext">Gallery</h1>
          <div className="images-slide">
            <div className="imgcard">
              <img
                src="https://yakraj.com/images/data-entry.png"
                alt="google"
              />
              <div className="sectionName">Export Section</div>
            </div>
            <div className="imgcard">
              <img
                src="https://yakraj.com/images/data-entry.png"
                alt="google"
              />
              <div className="sectionName">Export Section</div>
            </div>
            <div className="imgcard">
              <img
                src="https://yakraj.com/images/data-entry.png"
                alt="google"
              />
              <div className="sectionName">Export Section</div>
            </div>
            <div className="imgcard">
              <img
                src="https://yakraj.com/images/data-entry.png"
                alt="google"
              />
              <div className="sectionName">
                Export Sectio as;ldjkfasldfkj as;dflkjasd;ofiuwerk n
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Portfolio = () => {
  const portfolios = useRef(null);
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.to(portfolios.current, {
  //     x: -(portfolios.current.scrollWidth - window.innerWidth),
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "top top",
  //       trigger: portfolios.current,
  //       pin: ".wrapper",
  //       scrub: 1,
  //       markers: true,
  //       end: "+=3000",
  //       pinSpacing: true,
  //     },
  //   });
  // }, []);

  return (
    <div ref={portfolios} className="portfolio-container">
      <div className="portfolio-horizontal-scroll">
        <SingleSlide />
        <SingleSlide />
        <SingleSlide />
        <SingleSlide />
        <SingleSlide />
      </div>
    </div>
  );
};
