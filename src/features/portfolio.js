import React, { useState, useRef } from "react";
import "../styles/portfolio.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MainContext } from "../conext/main.context";

// export const SingleSlide = () => {

// const {setpopWindowInfo} = useContext(M)

//   return (

//   );
// };

// export const Portfolio = () => {
//   const portfolios = useRef(null);
//   const pinParent = useRef(null);
//   // useEffect(() => {
//   //   const tl = gsap.timeline();
//   //   tl.to(portfolios.current, {
//   //     x: -(portfolios.current.scrollWidth - window.innerWidth),
//   //     ease: "none",
//   //     scrollTrigger: {
//   //       start: "top",
//   //       trigger: portfolios.current,
//   //       pin: pinParent.current,
//   //       pinSpacing: "1px",
//   //       scrub: 1,
//   //       end: "+=4000",
//   //       // snap: 1 / 10,
//   //     },
//   //   });
//   // }, []);

//   return (
//     <div className="full-container">
//       <SingleSlide className="container" />
//       <SingleSlide className="container" />
//       <SingleSlide className="container" />
//       <SingleSlide className="container" />
//     </div>
//   );
// };
