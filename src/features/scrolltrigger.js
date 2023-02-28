import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useState, useEffect, useRef } from "react";

export const ScrollTriggerTrial = () => {
  const completed = () => {
    console.log(mytext.current);
  };
  const mytext = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(mytext.current, {
      scrollTrigger: {
        trigger: mytext.current,
        toggleActions: "restart pause reverse pause",
        scrub: 1,
        start: "top",
        end: "+=1000",
        markers: true,
      },
      onComplete: completed,
      fontSize: "5rem",
      left: "40%",
      border: "10px solid grey",
    });
    gsap.to(mytext.current, {
      scrollTrigger: {
        trigger: mytext.current,
        toggleActions: "restart pause reverse pause",
        scrub: 1,
        start: "1000 top",
        end: "+=1000",
        markers: true,
      },
      onComplete: completed,
      background: "red",
      left: "40%",
      border: "10px solid blue",
    });
  }, []);
  return (
    <div
      style={{
        background: "pink",
        height: "300vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        ref={mytext}
        style={{
          position: "fixed",
          border: "1px solid grey",
          top: "50%",
          left: "50%",
          fontSize: "1rem",
        }}
      >
        Yakraj Pariyar
      </h1>
    </div>
  );
};
