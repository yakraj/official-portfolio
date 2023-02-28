import React, { useState, useEffect, useRef } from "react";
import "../styles/firstpage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
  const DomeDoor = useRef(null);
  const youtubeIntro = useRef(null);
  const withcomputer = useRef(null);

  useEffect(() => {
    // let tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);
    // this is for first trigger
    var tlfirst = gsap.timeline({
      scrollTrigger: {
        trigger: DomHouse.current,
        // toggleActions: "restart pause reverse pause",
        start: "bottom bottom",
        end: "+=1200",
        scrub: true,
        markers: true,
      },
    });

    tlfirst.to([DomHouse.current, DomeDoor.current, youtubeIntro.current], {
      width: gsap.utils.wrap(["100vw", "26%", "14%"]),
      height: gsap.utils.wrap(["100vw", "44%", "9%"]),
      left: gsap.utils.wrap(["", "37%", "50%"]),
      borderTop: gsap.utils.wrap(["", "22px solid #4c4c4c", ""]),
      borderLeft: gsap.utils.wrap(["", "22px solid #959595", ""]),
      borderRight: gsap.utils.wrap(["", "22px solid #959595", ""]),
      fontSize: "2vw",
    });

    gsap.to(DomHouse.current, {
      scrollTrigger: {
        trigger: DomHouse.current,
        // toggleActions: "restart pause reverse pause",
        start: "1200 bottom",
        end: "+=500",
        scrub: true,
        markers: true,
      },
      height: "400vw",
      width: "400vw",
    });
    gsap.to(withcomputer.current, {
      scrollTrigger: {
        trigger: withcomputer.current,
        // toggleActions: "restart pause reverse pause",
        start: "1600 bottom",
        end: "+=500",
        scrub: true,
        markers: true,
      },
      opacity: 1,
    });
    gsap.to(withcomputer.current, {
      scrollTrigger: {
        trigger: withcomputer.current,
        // toggleActions: "restart pause reverse pause",
        start: "2100 bottom",
        end: "+=400",
        scrub: true,
        markers: true,
      },
      scale: 10,
      marginLeft: "60%",
    });
    gsap.to(DomHouse.current, {
      scrollTrigger: {
        trigger: DomHouse.current,
        // toggleActions: "restart pause reverse pause",
        start: "2500 bottom",
        end: "+=400",
        scrub: true,
        markers: true,
      },
      filter: "brightness(0) invert(1)",
      opacity: 0,
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
        <div ref={DomeDoor} className="dome-door">
          <img
            ref={withcomputer}
            alt="programmer"
            src={require("../assets/yakraj computer.webp")}
          />
        </div>
        <img
          className="standing-yakraj"
          alt="standing"
          src={require("../assets/yakraj standing.webp")}
        />
        <div ref={youtubeIntro} className="yakraj-intro-youtube"></div>
      </div>
      <div className="freelancer-dot"></div>
    </div>
  );
};
