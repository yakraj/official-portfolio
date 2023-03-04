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

  // this is only for coding languages bubbles
  const appbody = useRef(null);

  const CreateBall = () => {
    setInterval(function () {
      var randomItem =
        dynamicClass[Math.floor(Math.random() * dynamicClass.length)];
      /* create a ball height and width of 100px, and give position absolute */
      var ball = document.createElement("div");
      ball.style.width = "100px";
      ball.style.height = "100px";
      ball.style.boxShadow =
        "inset 0px 0px 15px #d1cece, inset 0px 0px 25px #fff, inset 0px 0px 50px #dbdbdb, 0px 0px 10px #a7a5a5";
      ball.style.borderRadius = "50%";
      ball.style.background = randomItem.colour;
      ball.style.position = "absolute";
      ball.style.display = "flex";
      ball.style.justifyContent = "center";
      ball.style.alignItems = "center";

      appbody.current.appendChild(ball);
      /* put it to bottom center */
      ball.style.left = "50%";
      ball.style.top = "100%";
      /* create a class name of "animated bubble" */
      ball.className = "animated-bubble";

      var insidetext = document.createElement("h3");
      insidetext.innerHTML = randomItem.text;
      insidetext.style.margin = "0px";

      insidetext.style.fontSize = "1rem";
      ball.appendChild(insidetext);
      /* give it two second of settimeout and take it to random place of window horizontally and vertically */
      setTimeout(function () {
        ball.style.left = Math.random() * window.innerWidth + "px";
        ball.style.top = Math.random() * window.innerHeight + "px";
      }, 2000);

      setTimeout(function () {
        ball.style.width = "100px";
        ball.style.height = "100px";
        ball.style.boxShadow =
          "inset 0px 0px 15px #d1cece, inset 0px 0px 25px #fff, inset 0px 0px 50px #dbdbdb, 0px 0px 10px #a7a5a5";
      }, 6000);
      setTimeout(function () {
        ball.style.width = "10px";
        ball.style.height = "10px";
        ball.style.opacity = 0;
        ball.style.overflow = "hidden";
        ball.style.boxShadow =
          "0px 0px 50px #fff,0px 0px 10px #fff,0px 0px 20px #fff,0px 0px 30px #fff,0px 0px 40px #fff,0px 0px 60px #fff,0px 0px 70px #fff,0px 0px 80px #fff,0px 0px 90px #fff,0px 0px 100px #fff";
      }, 7000);

      setTimeout(function () {
        appbody.current.removeChild(ball);
      }, 8000);
    }, 2000);
  };
  useEffect(() => {
    CreateBall();
    CreateBall();
    CreateBall();
    CreateBall();
    CreateBall();
  }, []);

  useEffect(() => {
    const div = DomHouse.current;
    // create a new ResizeObserver
    const observer = new ResizeObserver((entries) => {
      // loop through all entries (should only be one in this case)
      for (let entry of entries) {
        // get the new dimensions of the div
        DomHouse.current.style.fontSize =
          DomHouse.current.offsetWidth * (1.75 / 100) + "px";
      }
    });

    // observe the div for size changes
    observer.observe(div);

    // clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const wHeight = window.innerHeight;
    var firstEnd = wHeight * (215 / 100);
    var secondStart = wHeight * (144 / 100);
    var secondEnd = wHeight * (72 / 100);
    var thirdStart = wHeight * (245 / 100);
    var thirdEnd = wHeight * (87 / 100);

    gsap.set(DomHouse.current, { opacity: 1 }); // set opacity to 1 when entering viewport)
    // let tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);
    // this is for first trigger
    gsap.to([DomHouse.current, DomeDoor.current, youtubeIntro.current], {
      scrollTrigger: {
        trigger: DomHouse.current,
        start: "bottom bottom",
        end: `+=${firstEnd}`,
        scrub: 1,
      },

      fontWeight: "bold",
      width: gsap.utils.wrap(["400vw", "26%", "30%"]),
      height: gsap.utils.wrap(["400vw", "44%", "10%"]),
      left: gsap.utils.wrap(["", "37%", "42%"]),
      borderTop: gsap.utils.wrap(["", "22px solid #4c4c4c", ""]),
      borderLeft: gsap.utils.wrap(["", "22px solid #959595", ""]),
      borderRight: gsap.utils.wrap(["", "22px solid #959595", ""]),
    });
    gsap.to(withcomputer.current, {
      scrollTrigger: {
        trigger: withcomputer.current,
        // toggleActions: "restart pause reverse pause",
        start: `${secondStart} bottom`,
        end: `+=${secondEnd}`,
        scrub: 1,
        startAt: {
          trigger: DomHouse.current,
          start: "bottom bottom+=200",
        },
      },
      opacity: 1,
    });
    gsap.to(DomHouse.current, {
      scrollTrigger: {
        trigger: DomHouse.current,
        start: `${thirdStart} top`,
        end: `+=${thirdEnd} top`,
        scrub: 1,
      },
      filter: "brightness(0)",
      opacity: 0,
      display: "none",
      onComplete: function () {
        // Add new scrollTrigger for scrolling upwards
        ScrollTrigger.create({
          trigger: DomHouse.current,
          start: "bottom top", // set to bottom of viewport
          end: "bottom bottom", // set to top of viewport
          scrub: 1,
          onEnter: function () {
            gsap.set(DomHouse.current, { opacity: 1 }); // set opacity to 1 when entering viewport
          },
          onLeave: function () {
            gsap.set(DomHouse.current, { opacity: 0 }); // set opacity to 0 when leaving viewport
          },
        });
      },
    });
  }, []);

  var objects = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];
  return (
    <div ref={appbody} className="firstlanding-page">
      <h1 className="freelancer-text">FREELANCER.</h1>
      <div
        ref={DomHouse}
        onresize={() => {
          console.log("resized");
        }}
        className="ImageDome"
      >
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
