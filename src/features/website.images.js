import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { Loader } from "../components/loader";
import { MainContext } from "../conext/main.context";
import "../styles/popup.window.css";
import { ImageServer } from "../components/server";
export const WebsiteInfo = (url) => {
  const browserWin = useRef(null);
  const [isloading, onisloading] = useState(false);

  const {
    setpopWindowInfo,
    setpopAnimation,
    embedURL,
    popWindowInfo,
    MegamainD,
  } = useContext(MainContext);

  useEffect(() => {
    var body = document.getElementsByTagName("BODY");
    if (popWindowInfo) {
      if (popWindowInfo.includes("Close")) {
        body[0].style.overflow = "auto";
      } else {
        body[0].style.overflow = "hidden";
      }
    }
    if (MegamainD) {
      browserWin.current.style.animation = popWindowInfo;
    }
    onisloading(true);
    setTimeout(() => {
      onisloading(false);
    }, 2000);

    // browserWin.current.style.animation = "AnimateWindow 1s forwards";
    // browserWin.current.style.animation = "AnimateWindowClose 1s forwards";
  }, [popWindowInfo]);

  return (
    MegamainD && (
      <div ref={browserWin} className="info-website-window">
        <div className="embed-nav-window">
          <h3
            style={{
              margin: "0px",
              color: "rgb(248 248 248)",
              textShadow:
                "black 0px 0px 1px,azure 0px 0px 3px,azure 0px 0px 5px,black 0px 0px 3px",
            }}
          >
            {MegamainD.title}
          </h3>
          <div
            onClick={() => {
              setpopWindowInfo("AnimateWindowClose 1s forwards");
            }}
            className="embed-close"
          ></div>
        </div>
        <hr style={{ width: "100%", margin: 0, background: "grey" }} />
        <div className="rest-website-embed">
          <div className="main-container">
            {isloading ? (
              <Loader />
            ) : (
              <>
                <div className="info-container">
                  <div className="info-main-container">
                    <div className="top-info-container">
                      <div className="title-left-side">
                        <strong>{MegamainD.title.substring(0, 4)}</strong>
                        <p>{MegamainD.title.substring(4, 100)}</p>
                      </div>
                      <div className="title-right-side">
                        {/* <a
                          style={{ fontSize: "1rem" }}
                          href="https://www.google.com"
                        >
                          VISIT
                        </a> */}
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="two-type-parent">
                        <div className="info-description-container">
                          {MegamainD.description}
                        </div>
                        <div className="technologies-container">
                          <strong>Technologies Used</strong>
                          <hr style={{ width: "100%" }} />
                          <div>
                            {(() => {
                              let arr = MegamainD.tech_used.split(", ");
                              return arr.map((item, i) => {
                                return (
                                  <h1 key={i} className="works-tag">
                                    {item}
                                  </h1>
                                );
                              });
                            })()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="images-container">
                  <div className="single-image">
                    {(() => {
                      return MegamainD.images.map((item, i) => {
                        return (
                          <img
                            key={i}
                            src={`${ImageServer}/${item}`}
                            alt="all via"
                          />
                        );
                      });
                    })()}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};
