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
export const WebsiteInfo = (url) => {
  const browserWin = useRef(null);
  const [isloading, onisloading] = useState(false);

  const { setpopWindowInfo, setpopAnimation, embedURL, popWindowInfo } =
    useContext(MainContext);

  useEffect(() => {
    browserWin.current.style.animation = popWindowInfo;
    onisloading(true);
    setTimeout(() => {
      onisloading(false);
    }, 2000);

    // browserWin.current.style.animation = "AnimateWindow 1s forwards";
    // browserWin.current.style.animation = "AnimateWindowClose 1s forwards";
  }, [popWindowInfo]);

  return (
    <div ref={browserWin} className="info-website-window">
      <div className="embed-nav-window">
        <h3
          style={{
            margin: "0px",
            color: "#99cc6e",
            textShadow: "2px 2px 1px #000",
          }}
        >
          Information
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
        <div class="main-container">
          {isloading ? (
            <Loader />
          ) : (
            <>
              <div class="info-container">
                <div class="info-main-container">
                  <div class="top-info-container">
                    <div class="title-left-side">
                      <strong>HEAD</strong>
                      <p>ing is here</p>
                    </div>
                    <div class="title-right-side">
                      <a
                        style={{ fontSize: "1rem" }}
                        href="https://www.google.com"
                      >
                        VISIT
                      </a>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="two-type-parent">
                      <div class="info-description-container">
                        a unique type of website that can be achieved for
                        anything to get done, this can be usd for industrial
                        usages and a unique type of website that can be achieved
                        for anything to get done, this can be usd for industrial
                        usages and a unique type of website that can be achieved
                        for anything to get done, this can be usd for industrial
                        usages and a unique type of website that can be achieved
                        for anything to get done, this can be usd for industrial
                        usages and
                      </div>
                      <div class="technologies-container">
                        <strong>Technologies Used</strong>
                        <div class="technologies">
                          <p>React</p>
                        </div>
                        <div class="technologies">
                          <p>Node js</p>
                        </div>
                        <div class="technologies">
                          <p>Express Js</p>
                        </div>
                        <div class="technologies">
                          <p>Postgres SQL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="images-container">
                <div class="single-image">
                  {/* <img src={require("../assets/app.png")} alt="all via" />
                  <img
                    src={require("../assets/background.png")}
                    alt="all via"
                  />
                  <img src={require("../assets/app.png")} alt="all via" />
                  <img
                    src={require("../assets/data-entry.png")}
                    alt="all via"
                  />
                  <img src={require("../assets/mobile.png")} alt="all via" />
                  <img src={require("../assets/app.png")} alt="all via" /> */}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
