import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useState, useRef, useEffect, useContext } from "react";
import { MainContext } from "../conext/main.context";
import { SingleSlide } from "./portfolio.single.slide";

gsap.registerPlugin(ScrollTrigger);

export const ScrollTriggerTrial = () => {
  const { setpopmoreWork } = useContext(MainContext);
  const fCon = useRef(null);
  const sCon = useRef(null);
  const tCon = useRef(null);
  const foCon = useRef(null);
  const fiCon = useRef(null);
  const siCon = useRef(null);
  const fullContainer = useRef(null);

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
        // background: "red",
        display: "flex",
        opacity: 1,
        zIndex: 50,
      }).to(data, {
        duration: 0.1,
        opacity: 0,
        zIndex: -1,
        // background: "blue",
        display: "none",
      });
    });
  }, []);

  const { isLoadingMega, MegaProjects } = useContext(MainContext);
  console.log(isLoadingMega, MegaProjects);

  return (
    <>
      <div ref={fullContainer} className="full-container">
        <div ref={fCon} className="first-container container">
          <SingleSlide data={MegaProjects.length ? MegaProjects[0] : null} />
        </div>
        <div ref={sCon} className="second-container container">
          <SingleSlide data={MegaProjects.length ? MegaProjects[1] : null} />
        </div>
        <div ref={tCon} className="third-container container">
          <SingleSlide data={MegaProjects.length ? MegaProjects[2] : null} />
        </div>
        <div ref={foCon} className="fourth-container container">
          <div className="show-more-work">
            <div
              onClick={() => {
                setpopmoreWork("AnimateWindow 1s forwards");
              }}
            >
              Explore More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
