/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useContext } from "react";
import { Loading } from "../components/loading.gif";
import { MainContext } from "../conext/main.context";

import "../styles/small.cards.css";
import { SocialMedia } from "./social-media";
export const CardaPlay = () => {
  const {
    setpopAnimation,
    setembedURL,
    setpopSProjects,
    SmallProjects,
    isLoadingSmall,
  } = useContext(MainContext);

  useEffect(() => {}, []);
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
          console.log("function reached here");
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

  return (
    <div className="second-page">
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          paddingRight: "20%",
          boxSizing: "border-box",
          alignItems: "start",
          height: "100vh",
          backgroundPosition: "right center",
          backgroundSize: "70%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#198f9c",
          width: "100%",
          paddingTop: "5%",

          boxSizing: "border-box",
          backgroundImage: `url(${require("../assets/sprojects.webp")})`,
        }}
        className="show-more-work"
      >
        <div
          style={{ position: "relative", zIndex: 100, marginLeft: "15%" }}
          onClick={() => {
            setpopSProjects("AnimateWindow 1s forwards");
          }}
        >
          All Projects
        </div>
      </div>
      {isLoadingSmall ? (
        <Loading />
      ) : (
        dynamicClass.map((x, i) => {
          return (
            <div
              style={{
                backgroundImage: `url(${x.url})`,
                backgroundSize: "cover",
              }}
              onMouseEnter={() => {
                onmouseOver(true);
              }}
              onMouseLeave={() => {
                onmouseOver(false);
              }}
              onClick={() => {
                setpopAnimation("AnimateWindow 0.8s forwards");
                setembedURL(x.embed);
              }}
              key={x + i}
              className={"card" + " " + x.position}
            >
              <div class="card-info">
                <p class="title">John Doe</p>
              </div>
              <div class="card-bio">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>Visit</span>
                </button>
              </div>
            </div>
          );
        })
      )}

      <SocialMedia />
    </div>
  );
};
