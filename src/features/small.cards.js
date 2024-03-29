/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useRef, useContext } from "react";
import { Loading } from "../components/loading.gif";
import { MainContext } from "../conext/main.context";
import gsap from "gsap";

import "../styles/small.cards.css";
import { SocialMedia } from "./social-media";
import { ImageServer } from "../components/server";
export const CardaPlay = () => {
  const {
    setpopAnimation,
    setembedURL,
    setpopSProjects,
    SmallProjects,
    isLoadingSmall,
  } = useContext(MainContext);

  // this effect handles all animation of text
  const headingContainerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const heading = entry.target;

          // Reset animation properties
          gsap.set(heading, {
            opacity: 0,
            x: "-100%",
          });

          // Apply animation using GSAP
          gsap.to(heading, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        }
      });
    });

    const headingElements = headingContainerRef.current.querySelectorAll("h1");
    headingElements.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const parentRef = useRef(null);

  // this animation for all of this grid boxes

  useEffect(() => {
    if (SmallProjects.length) {
      const parentElement = parentRef.current;
      const boxes = parentElement.getElementsByTagName("div");

      gsap.set(boxes, { opacity: 0, x: "-100%" });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const box = entry.target;

            gsap.to(box, {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(box, {
                  opacity: 1,
                  x: "-100%",
                  duration: 0.5,
                  delay: 0.5,
                  ease: "power2.out",
                });
              },
            });
          }
        });
      });

      Array.from(boxes).forEach((box) => {
        observer.observe(box);
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [SmallProjects]);

  const [dynamicClass, ondynamicClass] = useState([
    { position: "hide-first", data: "", embed: "" },
    {
      position: "first",
      embed: "https://our-earth.vercel.app/",
      data: "tulsi",
      url: "https://fastly.picsum.photos/id/239/200/200.jpg?hmac=8JqlXUpZ9Xy0H6tMK8sCPQAYU9vUn9Qa8Kg-U9h3sCY",
    },
    {
      embed: "https://prime-video.vercel.app/",
      position: "second",
      data: "yakraj",
      url: "https://fastly.picsum.photos/id/976/200/200.jpg?hmac=xz9CTpScnLHQm_wNTcJmz8bQM6-ApTQnof5-4LGtu-s",
    },
    {
      embed: "https://data-entry-app.vercel.app/",
      position: "third",
      data: "amrita",
      url: "https://fastly.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    },
    {
      embed: "https://contact-directory.vercel.app/",
      position: "fourth",
      data: "dolma",
      url: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ",
    },
    {
      embed: "https://daily-expense-report.vercel.app/",
      position: "fifth",
      data: "dhanisha",
      url: "https://fastly.picsum.photos/id/779/200/200.jpg?hmac=qClHBmnKwT7Xt6flSVOh5Ax0tWLRo_gLVmwd4dkSVAo",
    },
    {
      embed: "https://face-recognition-ruddy.vercel.app/",
      position: "sixth",
      data: "daylight",
      url: "https://fastly.picsum.photos/id/446/200/200.jpg?hmac=PkaLcCtgL4IvAz-gsxbCXz_tl0qdVUGOrxhYLrywa-c",
    },
    {
      embed: "https://m.sunauloo.com/important-info",
      position: "hide-last",
      data: "family",
      url: "https://fastly.picsum.photos/id/1053/200/200.jpg?hmac=JOtR2adXynxSVClz0LNlPZjW0TJTRXc7c15kka2QoRk",
    },
    {
      embed: "",
      position: "hide-last",
      data: "india",
      url: "https://fastly.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    },
    {
      embed: "",
      position: "hide-last",
      data: "nepal",
      url: "https://fastly.picsum.photos/id/119/200/200.jpg?hmac=JGrHG7yCKfebsm5jJSWw7F7x2oxeYnm5YE_74PhnRME",
    },
    {
      embed: "",
      position: "hide-last",
      data: "country",
      url: "https://fastly.picsum.photos/id/615/200/200.jpg?hmac=dtUr9nHZQ2Q9aTaRUG-DbStwQeKUNwxAXn3snkihUI4",
    },
    {
      embed: "",
      data: "hellothere",
      position: "hide-last",
      url: "https://fastly.picsum.photos/id/229/200/200.jpg?hmac=b3V9uXS2Q1EA1tLHxvWjTgBF4TphN4ibxTjDv2PO2jg",
    },
    {
      embed: "",
      position: "hide-last",
      data: "what",
      url: "https://fastly.picsum.photos/id/95/200/200.jpg?hmac=EFN5lZlH5NAZUP3gI_uiihIaHacpG1u4aw_KmeJgeQ0",
    },
    {
      embed: "",
      position: "hide-last",
      data: "is",
      url: "https://fastly.picsum.photos/id/18/200/200.jpg?hmac=naWL3P7tSw9NeN2OXqD0XhBgnBko_h5B-Z3UdUVLFcU",
    },
    {
      embed: "",
      position: "hide-last",
      data: "your",
      url: "https://fastly.picsum.photos/id/825/200/200.jpg?hmac=Rpa0BK5LjdGtlClC7IBAfyqXkR8ivGiARYDUmgpjZ3w",
    },
    {
      embed: "",
      position: "hide-last",
      data: "name",
      url: "https://fastly.picsum.photos/id/946/200/200.jpg?hmac=a01jNqgHjp0Vj_csHXBpEttrSyo1vFrUTL1fwgKYG0Y",
    },
  ]);

  // create hide element at the end and start
  const [trydata, ontrydata] = useState(dynamicClass);
  const [dateit, ondateit] = useState(dynamicClass);
  const [mouseOver, onmouseOver] = useState(false);
  const [ranald, onranald] = useState(false);
  const [newtime, onnewtime] = useState();
  useEffect(() => {
    ondynamicClass(trydata);
    if (mouseOver) {
      return;
    } else {
      ClassChange(trydata);
    }
  }, [dateit, mouseOver.first]);

  // looping thing will start here

  const ClassChange = (data) => {
    if (mouseOver) {
      return;
    } else {
      var first = data[data.length - 1];
      var cutfirst = data.slice(0, data.length - 1);
      var final = [first, ...cutfirst];

      var staticdata = data;

      const changer = (data1) => {
        staticdata[data1].position = final[data1].position;
        if (data1 <= 0) {
          return;
        }
        changer(data1 - 1);
      };
      changer(final.length - 1);

      // as per my prepesctive it will change names too

      // var first1 = data[data.length - 1];
      // var cutfirst1 = names.slice(0, names.length - 1);
      // var final1 = [first1, ...cutfirst1];
      // var ready = final1.slice(0, 8);

      setTimeout(() => {
        // ondata(ready);
        // ClassChange(staticdata);
        ondateit(new Date());
        ontrydata(staticdata);
      }, 2000);
    }
  };

  useEffect(() => {
    if (!ranald) {
      if (mouseOver) {
        onnewtime(new Date());
        return;
      } else {
        if ((newtime) => 2000) {
          ClassChange(dynamicClass);
          onranald(true);
        } else {
          onnewtime(new Date());
          return;
        }
      }
    } else {
      onnewtime(new Date());
      return;
    }

    setTimeout(() => {
      onranald(false);
    }, 4000);
    onnewtime(new Date());
  }, [mouseOver]);

  const BackgroundChange = (url) => {
    let backgroundImg = document.querySelector(".parent-small-projects");
    backgroundImg.style.backgroundImage = `url(${ImageServer}h_700/${url})`;
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          transitionDuration: "0.5s",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#fafafa",
          backgroundPosition: "center",
        }}
        className="parent-small-projects"
      >
        <div className="small-projects">
          <div ref={headingContainerRef} id="id1681960633380">
            <h1
              style={{
                textAlign: "start",
                fontFamily: "Oleo Script, Garamond",
                fontSize: "5rem",
                margin: "5px",
                color: "#D84924",
                textShadow: "0 2px 5px #D84924,0 2px 5px #D84924",
              }}
            >
              HTML
            </h1>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Great Vibes,Courier New",
                fontSize: "10rem",
                margin: "5px",
                color: "#2449D8",
                textShadow: "0 2px 5px #2449D8,0 2px 5px #2449D8",
              }}
            >
              CSS
            </h1>
            <h1
              style={{
                textAlign: "start",
                fontFamily: "Kumar One Outline,Helvetica",
                fontSize: "5rem",
                margin: "5px",
                color: "#EAD41C",
                textShadow: "0 2px 5px #EAD41C,0 2px 5px #EAD41C",
              }}
            >
              JAVASCRIPT
            </h1>
            <h1
              style={{
                textAlign: "left",
                fontFamily: "Helvetica",
                fontSize: "3rem",
                margin: "5px",
                letterSpacing: "20px",
                color: "blueviolet",
                textShadow: "0 2px 5px #00CDF2,0 2px 5px #00CDF2",
              }}
            >
              TYPESCRIPT
            </h1>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: "3rem",
                margin: "5px",
                letterSpacing: "45px",
                color: "#00CDF2",
                textShadow: "0 2px 5px #00CDF2,0 2px 5px #00CDF2",
              }}
            >
              REACT
            </h1>
            <h1
              style={{
                textAlign: "start",
                fontFamily: "Monoton,Helvetica",
                fontSize: "3rem",
                margin: "5px",
                letterSpacing: "7px",
                color: "#00CDF2",
                // textShadow: "0 2px 5px #00CDF2,0 2px 5px #00CDF2",
              }}
            >
              REACT NATIVE
            </h1>
            <h1
              style={{
                textAlign: "start",
                fontFamily: "Monoton,Helvetica",
                fontSize: "9rem",
                margin: "5px",
                letterSpacing: "0px",
                textTransform: "uppercase",
                color: "#2471BD",
              }}
            >
              sql
            </h1>
            <h1
              style={{
                textAlign: "start",
                fontFamily: "Kumar One Outline,Helvetica",
                fontSize: "3rem",
                margin: "5px",
                letterSpacing: "0px",
                textTransform: "uppercase",
                color: "#6A9F5C",
                // textShadow: "0 2px 5px #6A9F5C,0 2px 5px #6A9F5C",
              }}
            >
              Node.js
            </h1>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: "6rem",
                margin: "5px",
                letterSpacing: "0px",
                textTransform: "uppercase",
                color: "#89BB3C",
                textShadow: "0 2px 5px #89BB3C,0 2px 5px #89BB3C",
              }}
            >
              Express.js
            </h1>
            <h1
              style={{
                textAlign: "start",
                fontFamily: "Shrikhand,Helvetica",
                fontSize: "2rem",
                margin: "5px",
                letterSpacing: "29px",
                textTransform: "uppercase",
                textDecoration: "underline",
                color: "#E4D04A",
                textShadow: "0 0px 2px #E4D04A",
              }}
            >
              Full stack
            </h1>
          </div>
          {isLoadingSmall ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              }}
            >
              <img
                style={{ width: "150px", height: "150px" }}
                alt="loading"
                src={require("../assets/loading.gif")}
              />
            </div>
          ) : (
            SmallProjects.length && (
              <div
                data-cursor-exclusion
                id="id1681960633380 "
                className="works-grid"
              >
                <div ref={parentRef} className="parent">
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[1].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[1].url);
                    }}
                    className="div1"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[1].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[2].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[2].url);
                    }}
                    className="div2"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[2].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[3].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[3].url);
                    }}
                    className="div3"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[3].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[4].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[4].url);
                    }}
                    className="div31"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[4].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[5].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[5].url);
                    }}
                    className="div4"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[5].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[6].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[6].url);
                    }}
                    className="div5"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[6].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[7].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[7].url);
                    }}
                    className="div51"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[7].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[8].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[8].url);
                    }}
                    className="div6"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[8].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[9].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[9].url);
                    }}
                    className="div7"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[9].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[10].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[10].url);
                    }}
                    className="div8"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[10].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[11].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[11].url);
                    }}
                    className="div81"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[11].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[12].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[12].url);
                    }}
                    className="div9"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[12].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[13].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[13].url);
                    }}
                    className="div91"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[13].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[14].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[14].url);
                    }}
                    className="div10"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[14].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[15].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[15].url);
                    }}
                    className="div11"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[15].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[16].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[16].url);
                    }}
                    className="div12"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[16].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[17].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[17].url);
                    }}
                    className="div13"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[17].thumbnail}`}
                    />
                  </div>
                  <div
                    onMouseOver={() => {
                      BackgroundChange(SmallProjects[0].thumbnail);
                    }}
                    onClick={() => {
                      setpopAnimation("AnimateWindow 0.8s forwards");
                      setembedURL(SmallProjects[0].url);
                    }}
                    className="div14"
                  >
                    <img
                      alt="thumbnail"
                      src={`${ImageServer}h_200/${SmallProjects[0].thumbnail}`}
                    />
                  </div>
                  <article
                    onClick={() => {
                      setpopSProjects("AnimateWindow 1s forwards");
                    }}
                    className="div15"
                  >
                    <h1>More</h1>
                  </article>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
