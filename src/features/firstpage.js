import React, { useState, useEffect, useRef } from "react";
import "../styles/firstpage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";
export const FirstLanding = () => {
  const wHeight = window.innerHeight;
  const wWidth = window.innerWidth;
  const [dynamicClass, ondynamicClass] = useState([
    {
      position: "language-second",
      text: "JAVASCRIPT",
      colour: "#F7DF1E",
    },

    {
      position: "language-center",
      text: "ANDROID",
      colour: "#2FD37D",
    },
    {
      position: "language-last",
      text: "HTML",
      colour: "#F16529",
    },
    {
      position: "language-last last-hide language-hide",
      text: "CSS",
      colour: "#2196F3",
    },
    {
      position: "language-last last-hide language-hide",
      text: "NODE JS",
      colour: "#8BC500",
    },
    {
      position: "language-last last-hide language-hide",
      text: "SQL",
      colour: "rgb(61,136,188)",
    },
    {
      position: "language-last last-hide language-hide",
      text: "REACT",
      colour: "#222222",
    },
    {
      position: "language-last last-hide language-hide",
      text: "REACT NATIVE",
      colour: "#222222",
    },
    {
      position: "language-last last-hide language-hide",
      text: "EXPRESS JS",
      colour: "#5FAC43",
    },
    {
      position: "language-last last-hide language-hide",
      text: "WORDPRESS",
      colour: "#1F6F93",
    },
    {
      position: "language-last last-hide language-hide",
      text: "BOOTSTRAP",
      colour: "#7641BD",
    },
    {
      position: "language-last last-hide language-hide",
      text: "JQUERY",
      colour: "#1064A5",
    },
    {
      position: "language-last last-hide language-hide",
      text: "TYPESCRIPT",
      colour: "#1064A5",
    },
  ]);
  const DomHouse = useRef(null);
  const DomeDoor = useRef(null);
  const youtubeIntro = useRef(null);
  const withcomputer = useRef(null);

  // this is only for coding languages bubbles
  const appbody = useRef(null);
  var objects = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];

  const freelancerText = useRef(null);
  useEffect(() => {
    const Introtext = freelancerText.current;
    const message1 = "Freelancer.";
    const message2 = "Yakraj.";
    let index = 0;
    let erase = false;
    let switchText = false;

    function writeText() {
      if (!erase) {
        if (switchText) {
          Introtext.textContent += message2[index];
        } else {
          Introtext.textContent += message1[index];
        }
        index++;
        if (index === message1.length && !switchText) {
          erase = true;
          index--;
          setTimeout(writeText, 1000);
        } else if (index === message2.length && switchText) {
          erase = true;
          index--;
          setTimeout(writeText, 1000);
        } else {
          setTimeout(writeText, 100);
        }
      } else {
        if (switchText) {
          Introtext.textContent = message2.slice(0, index - 1);
        } else {
          Introtext.textContent = message1.slice(0, index - 1);
        }
        index--;
        if (index === 0) {
          erase = false;
          switchText = !switchText;
          setTimeout(writeText, 500);
        } else {
          setTimeout(writeText, 100);
        }
      }
    }

    setTimeout(writeText, 1000);
  }, []);

  return (
    <div ref={appbody} className="firstlanding-page">
      <div className="first-landing-absolute">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <h1 ref={freelancerText} className="freelancer-text"></h1>

      <div className="freelancer-dot"></div>
    </div>
  );
};
