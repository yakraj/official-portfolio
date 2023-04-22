import React, { useEffect, useRef, useState } from "react";
import "./recent.works.css";
import { useContext } from "react";
import { MainContext } from "../conext/main.context";
import { ImageServer } from "../components/server";
export const RecentWorks = () => {
  // create a number array of 1 to 20
  // const { setpopWindowInfo, isLoadingMega } = useContext(MainContext);

  const NumberArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [RangeValue, onRangeValue] = useState();
  const ContentScroll = useRef();
  const RangeSlider = useRef();
  const { MegaProjects, setpopWindowInfo, setMegamainD } =
    useContext(MainContext);
  useEffect(() => {
    // get the percentage of contentscroll from scroll width
    var data = ContentScroll.current;

    if (data.scrollWidth - data.offsetWidth < 5) {
      RangeSlider.current.style.display = "none";
    }
    const scrollPercentage = (data.offsetWidth * 100) / data.scrollWidth;
    onRangeValue(scrollPercentage);
  }, []);

  function handleChange(event) {
    onRangeValue(event.target.value);
    var scrolling =
      ContentScroll.current.scrollWidth * (event.target.value / 100);

    ContentScroll.current.scrollLeft =
      scrolling - ContentScroll.current.offsetWidth;
  }
  return (
    <div className="recent-works">
      <div className="top-nav">
        <h1
          style={{
            fontWeight: 400,
            letterSpacing: "11px",
            color: "rgb(255, 255, 255)",
          }}
        >
          Recent Works
        </h1>
        <div className="small-nav-container">
          <h1 className="title-text">all</h1>
          <h1 className="title-text">web</h1>
          <h1 className="title-text">apps</h1>
          <h1 className="title-text">design</h1>
          <h1 className="title-text">extra</h1>
          <h1 className="title-text">ui/ux</h1>
        </div>
      </div>
      <div ref={ContentScroll} className="portfolio-contents">
        {MegaProjects.map((item, i) => {
          return (
            <div key={i} className="portfolio-card-container">
              <div
                style={{
                  backgroundImage: `url(${ImageServer}h_200/${item.images[0]})`,
                }}
                className="portfolio-card-first"
              >
                <div id="id1682067679069">
                  {item.description.substring(0, 70)}
                </div>
              </div>
              <div
                onClick={() => {
                  setpopWindowInfo("AnimateWindow 1s forwards");
                  setMegamainD(item);
                }}
                className="portfolio-card-second"
              >
                <h1 className="works-title">{item.title}</h1>
                <div id="id1682068208935">
                  {(() => {
                    let arr = item.tech_used.split(", ");
                    return arr.map((item, i) => {
                      return (
                        <h1 key={i} className="works-tag">
                          {item}
                        </h1>
                      );
                    });
                  })()}
                </div>
                <h1 className="works-tag">More</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div ref={RangeSlider} id="id1682067593169">
        <input
          defaultValue={RangeValue}
          type="range"
          min="0"
          max="100"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
