import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { Loader } from "../components/loader";
import { Loading } from "../components/loading.gif";
import { MainContext } from "../conext/main.context";
import "../styles/popup.window.css";
import { ImageServer } from "../components/server";
export const SmallProjects = (url) => {
  const browserWin = useRef(null);
  const {
    popSProjects,
    setpopSProjects,
    embedURL,
    SmallProjects,
    isLoadingSmall,
    setpopAnimation,
    setembedURL,
  } = useContext(MainContext);
  const [isloading, onisloading] = useState(false);

  useEffect(() => {
    var body = document.getElementsByTagName("BODY");

    if (popSProjects) {
      if (popSProjects.includes("Close")) {
        body[0].style.overflow = "auto";
      } else {
        body[0].style.overflow = "hidden";
      }
    }
    browserWin.current.style.animation = popSProjects;
    onisloading(true);
    setTimeout(() => {
      onisloading(false);
    }, 2000);

    // browserWin.current.style.animation = "AnimateWindow 1s forwards";
    // browserWin.current.style.animation = "AnimateWindowClose 1s forwards";
  }, [popSProjects]);

  return (
    <div ref={browserWin} className="embed-window">
      <div className="embed-nav-window">
        <h3
          style={{
            color: "saddlebrown",
            margin: "0px",
            textShadow: "2px 2px 5px sandybrown",
          }}
        >
          All Little Projects
        </h3>
        <div
          onClick={() => {
            setpopSProjects("AnimateWindowClose 1s forwards");
          }}
          className="embed-close"
        ></div>
      </div>
      <hr style={{ width: "100%", margin: 0, background: "grey" }} />

      {isloading ? (
        <Loader />
      ) : (
        <div className="rest-website-embed full-items-container">
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
            SmallProjects.map((item, i) => {
              return (
                <div
                  onClick={() => {
                    setpopAnimation("AnimateWindow 0.8s forwards");
                    setembedURL(item.url);
                  }}
                  style={{
                    backgroundImage: `url(${ImageServer}h_200/${item.thumbnail})`,
                  }}
                  key={i}
                  className="component-card"
                  message={item.description}
                >
                  <h3>{item.title}</h3>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
