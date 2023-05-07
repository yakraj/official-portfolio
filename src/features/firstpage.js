import React, { useState, useEffect, useRef, useContext } from "react";
import "../styles/firstpage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";
import { MainContext } from "../conext/main.context";
import { ImageServer } from "../components/server";
export const FirstLanding = () => {
  const { AllImages, GetReImages } = useContext(MainContext);

  const wHeight = window.innerHeight;
  const wWidth = window.innerWidth;
  const [dynamicClass, ondynamicClass] = useState([]);
  const DomHouse = useRef(null);
  const DomeDoor = useRef(null);
  const youtubeIntro = useRef(null);
  const withcomputer = useRef(null);

  // this is only for coding languages bubbles
  const appbody = useRef(null);

  const freelancerText = useRef(null);

  // this is for append cubes
  useEffect(() => {
    if (AllImages.length) {
      function createCubeElement() {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        const faces = ["front", "back", "right", "left", "top", "bottom"];

        for (let i = 0; i < faces.length; i++) {
          const face = document.createElement("div");
          const URL =
            ImageServer +
            "h_200/" +
            AllImages[Math.floor(Math.random() * AllImages.length)].thumbnail;
          face.classList.add(faces[i]);

          face.style.backgroundImage = `url(${URL})`;

          cube.appendChild(face);
        }
        const moveit = () => {
          const randomNum = Math.random() * 0.7 + 0.3;

          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          var cubeWidth = cube.offsetWidth;
          var cubeHeight = cube.offsetHeight;
          var randomX = Math.floor(Math.random() * (windowWidth - cubeWidth));
          var randomY = Math.floor(Math.random() * (windowHeight - cubeHeight));
          cube.style.transform = `perspective(100px) translate3d(0, 0, ${
            -1 * Math.floor(Math.random() * 100)
          }px)`;
          cube.style.left = randomX + "px";
          cube.style.top = randomY + "px";
          cube.style.scale = randomNum;

          var children = cube.children;
          cube.style.zIndex = Math.round(randomNum * 10);

          for (var i = 0; i < children.length; i++) {
            children[i].style.filter = `blur(${(0.9 - randomNum) * 10}px)`;
            children[i].style.opacity = randomNum + 0.2;
          }
          // cube.style.filter = blur();
        };
        moveit();

        // Move the cube every 5 seconds
        setInterval(moveit, 5000);

        appbody.current.appendChild(cube);
        setTimeout(() => {
          cube.remove();
        }, 50000);
      }
      createCubeElement();
      // create cube in every 3 sec
      setInterval(createCubeElement, 3000);
    }
    return;
  }, [AllImages]);

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
