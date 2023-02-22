import React, { useState, useEffect } from "react";
import "../styles/coding.language.css";

export const CodingLanguages = () => {
  const [dynamicClass, ondynamicClass] = useState([
    {
      position: "language-first first-hide language-hide",
      text: "",
      colour: "",
    },
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

  // create hide element at the end and start
  const [trydata, ontrydata] = useState(dynamicClass);
  const [dateit, ondateit] = useState(dynamicClass);
  const [mouseOver, onmouseOver] = useState(false);
  const [ranald, onranald] = useState(false);
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
  return (
    <div className="languages-slider">
      {dynamicClass.map((x, i) => {
        return (
          <div style={{ background: x.colour }} className={x.position}>
            <h3 style={{ color: "#fff" }}>{x.text}</h3>
            {/* <div percentage={100} className="language-progressbar" /> */}
          </div>
        );
      })}
      {/* <div className="language-first language-hide"></div>
      <div className="language-second"></div>
      <div className="language-center">
        <h3>HTML</h3>
        {/* <div percentage={100} className="language-progressbar" /> */}
      {/* </div>
      <div className="language-last"></div>
      <div className="language-last language-hide"></div> */}{" "}
    </div>
  );
};
