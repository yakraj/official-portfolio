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
export const MoreWork = (url) => {
  const browserWin = useRef(null);
  const { popmoreWork, setpopmoreWork, embedURL } = useContext(MainContext);
  const [isloading, onisloading] = useState(false);

  useEffect(() => {
    browserWin.current.style.animation = popmoreWork;
    onisloading(true);
    setTimeout(() => {
      onisloading(false);
    }, 2000);
    // browserWin.current.style.animation = "AnimateWindow 1s forwards";
    // browserWin.current.style.animation = "AnimateWindowClose 1s forwards";
  }, [popmoreWork]);

  const mapp = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
  ];
  return (
    <div ref={browserWin} class="embed-window">
      <div className="embed-nav-window">
        <h3
          style={{
            margin: "0px",
            color: "brown",
            textShadow: "2px 1px 3px darkgoldenrod",
            marginLeft: "20px",
          }}
        >
          Works
        </h3>
        <div
          onClick={() => {
            setpopmoreWork("AnimateWindowClose 1s forwards");
          }}
          className="embed-close"
        ></div>
      </div>
      <hr style={{ width: "100%", margin: 0, background: "grey" }} />

      {isloading ? (
        <Loader />
      ) : (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "start",
            overflowY: "scroll",
          }}
          className="rest-website-embed"
        >
          {mapp.map((x, i) => {
            return (
              <div class="doddle-container">
                <div class="center-doddle"></div>
                <div class="left-doddle-ear">More</div>
                <div class="right-doddle-ear">Visit</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
