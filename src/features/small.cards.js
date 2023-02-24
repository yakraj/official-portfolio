/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import "../styles/small.cards.css";
import { SocialMedia } from "./social-media";
export const CardaPlay = () => {
  const [dynamicClass, ondynamicClass] = useState([
    { position: "hide-first", data: "" },
    {
      position: "first",
      data: "tulsi",
      url: "https://fastly.picsum.photos/id/239/200/200.jpg?hmac=8JqlXUpZ9Xy0H6tMK8sCPQAYU9vUn9Qa8Kg-U9h3sCY",
    },
    {
      position: "second",
      data: "yakraj",
      url: "https://fastly.picsum.photos/id/976/200/200.jpg?hmac=xz9CTpScnLHQm_wNTcJmz8bQM6-ApTQnof5-4LGtu-s",
    },
    {
      position: "third",
      data: "amrita",
      url: "https://fastly.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    },
    {
      position: "fourth",
      data: "dolma",
      url: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ",
    },
    {
      position: "fifth",
      data: "dhanisha",
      url: "https://fastly.picsum.photos/id/779/200/200.jpg?hmac=qClHBmnKwT7Xt6flSVOh5Ax0tWLRo_gLVmwd4dkSVAo",
    },
    {
      position: "sixth",
      data: "daylight",
      url: "https://fastly.picsum.photos/id/446/200/200.jpg?hmac=PkaLcCtgL4IvAz-gsxbCXz_tl0qdVUGOrxhYLrywa-c",
    },
    {
      position: "hide-last",
      data: "family",
      url: "https://fastly.picsum.photos/id/1053/200/200.jpg?hmac=JOtR2adXynxSVClz0LNlPZjW0TJTRXc7c15kka2QoRk",
    },
    {
      position: "hide-last",
      data: "india",
      url: "https://fastly.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    },
    {
      position: "hide-last",
      data: "nepal",
      url: "https://fastly.picsum.photos/id/119/200/200.jpg?hmac=JGrHG7yCKfebsm5jJSWw7F7x2oxeYnm5YE_74PhnRME",
    },
    {
      position: "hide-last",
      data: "country",
      url: "https://fastly.picsum.photos/id/615/200/200.jpg?hmac=dtUr9nHZQ2Q9aTaRUG-DbStwQeKUNwxAXn3snkihUI4",
    },
    {
      position: "hide-last",
      data: "hellothere",
      url: "https://fastly.picsum.photos/id/229/200/200.jpg?hmac=b3V9uXS2Q1EA1tLHxvWjTgBF4TphN4ibxTjDv2PO2jg",
    },
    {
      position: "hide-last",
      data: "what",
      url: "https://fastly.picsum.photos/id/95/200/200.jpg?hmac=EFN5lZlH5NAZUP3gI_uiihIaHacpG1u4aw_KmeJgeQ0",
    },
    {
      position: "hide-last",
      data: "is",
      url: "https://fastly.picsum.photos/id/18/200/200.jpg?hmac=naWL3P7tSw9NeN2OXqD0XhBgnBko_h5B-Z3UdUVLFcU",
    },
    {
      position: "hide-last",
      data: "your",
      url: "https://fastly.picsum.photos/id/825/200/200.jpg?hmac=Rpa0BK5LjdGtlClC7IBAfyqXkR8ivGiARYDUmgpjZ3w",
    },
    {
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
      {dynamicClass.map((x, i) => {
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
            key={x + i}
            className={"card" + " " + x.position}
          >
            {x.data}
          </div>
        );
      })}

      <SocialMedia />
    </div>
  );
};
