import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useState, useRef, useEffect } from "react";
import { SingleSlide } from "./portfolio";
gsap.registerPlugin(ScrollTrigger);

export const ScrollTriggerTrial = () => {
  const fCon = useRef(null);
  const sCon = useRef(null);
  const tCon = useRef(null);
  const foCon = useRef(null);
  const fiCon = useRef(null);
  const siCon = useRef(null);
  const fullContainer = useRef(null);

  // gsap.to(fCon.current, {
  //   scrollTrigger: {
  //     trigger: fCon.current,
  //     start: `${window.innerHeight} center`,
  //     markers: true,
  //     end: `+=${window.innerHeight + window.innerHeight / 2}`,
  //     scrub: 1,
  //   },
  //   background: "red",
  //   onComplete: function () {
  //     // gsap.to(fCon.current, { opacity: 0 });
  //   },
  // });

  useEffect(() => {}, []);

  useEffect(() => {
    var addtop = fullContainer.current.offsetTop;
    // console.log();
    var datas = [fCon.current, sCon.current, tCon.current, foCon.current];

    // for(let i = 0; i<datas.length;i++){}
    datas.forEach((data, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: data,
          start: `${
            addtop +
            (window.innerHeight * index +
              (window.innerHeight / 2) * index +
              window.innerHeight / 2)
          } top`,
          end: `+=${window.innerHeight}`,
          scrub: 1,
        },
      });
      tl.to(data, {
        background: "red",
        opacity: 1,
        zIndex: 5000,
      }).to(data, {
        duration: 0.1,
        opacity: 0,
        zIndex: 0,
        background: "blue",
        display: "none",
      });

      //   console.log(data, "data");
      //   gsap.to(data, {
      //     scrollTrigger: {
      //       trigger: data,
      //       start: `${
      //         (window.innerHeight / 2) * index + window.innerHeight / 2
      //       } top`,
      //       markers: true,
      //       end: `+=${window.innerHeight / 2}`,
      //       scrub: 1,
      //     },
      //     background: "red",
      //     opacity: 1,
      //     zIndex: 5000,
      //     onComplete: function () {
      //       gsap.to(data, {
      //         duration: 0.1,
      //         opacity: 0,
      //         zIndex: 0,
      //         snap: {
      //           snapTo: "labels", // snap to the closest label in the timeline
      //           duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      //           delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      //           ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
      //         },
      //         background: "blue",
      //       });
      //     },
      //   });
    });
  }, []);

  return (
    <>
      <div ref={fullContainer} className="full-container">
        <div ref={fCon} className="first-container container">
          <SingleSlide />
        </div>
        <div ref={sCon} className="second-container container">
          <SingleSlide />
        </div>
        <div ref={tCon} className="third-container container">
          <SingleSlide />
        </div>
        <div ref={foCon} className="fourth-container container">
          it will be applied here
        </div>
      </div>
    </>
  );
};
