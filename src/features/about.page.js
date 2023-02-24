import React, { useRef } from "react";

import Tilt from "react-tilt";

export const AboutPage = () => {
  const imageRef = useRef(null);
  return (
    <div className="landing-firstpage">
      <div className="leftside">
        <Tilt
          options={{
            reverse: false, // reverse the tilt direction
            max: 35, // max tilt rotation (degrees)
            perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
            scale: 1.2, // 2 = 200%, 1.5 = 150%, etc..
            speed: 300, // Speed of the enter/exit transition
            transition: true, // Set a transition on enter/exit.
            axis: null, // What axis should be disabled. Can be X or Y.
            reset: true, // If the tilt effect has to be reset on exit.
            easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
          }}
          className="Tilt first-card Tilt-inner"
        >
          <div ref={imageRef} className="youtube-image">
            <img
              style={{ width: "5vw" }}
              alt="youtube"
              src={require("../assets/youtube-icon.png")}
            />
          </div>

          <a
            href="./#contact-section"
            style={{ textDecoration: "none" }}
            className="contact-me-button"
          >
            Contact Me
            <img
              alt="paper plane"
              src={require("../assets/paper-plane.svg").default}
            />
          </a>
        </Tilt>
      </div>
      <div className="rightside"></div>
      {/* <CodingLanguages /> */}
    </div>
  );
};
