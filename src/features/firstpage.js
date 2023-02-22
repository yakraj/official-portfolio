import React, { useState, useEffect, useRef } from "react";
import "../styles/firstpage.css";
import gsap from "gsap";
import { scrollTrigger } from "gsap/ScrollTrigger";
export const FirstLanding = () => {
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

  useEffect(() => {
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".container",
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
      },
    });
  });

  var objects = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];
  return (
    <div className="firstlanding-page">
      <h1 className="freelancer-text">FREELANCER.</h1>
      <div ref={DomHouse} className="ImageDome">
        {objects.map((x) => {
          return (
            <div className="dome-brick-layer">
              {dynamicClass
                .sort(() => Math.random() - 0.5)
                .map((x, i) => {
                  return <p style={{ background: x.colour }}>{x.text}</p>;
                })}
            </div>
          );
        })}
        <div className="dome-door">
          <img
            alt="programmer"
            src="http://gogotraining.com/blog/wp-content/uploads/2016/10/Online-Programming-Classes.jpg"
          />
        </div>
      </div>
      <div className="freelancer-dot"></div>
    </div>
  );
};
