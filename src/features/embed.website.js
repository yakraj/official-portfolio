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
export const EmbedWebsite = (url) => {
  const browserWin = useRef(null);
  const { popAnimation, setpopAnimation, embedURL } = useContext(MainContext);
  const [isloading, onisloading] = useState(false);

  useEffect(() => {
    browserWin.current.style.animation = popAnimation;
    onisloading(true);
    setTimeout(() => {
      onisloading(false);
    }, 2000);
    // browserWin.current.style.animation = "AnimateWindow 1s forwards";
    // browserWin.current.style.animation = "AnimateWindowClose 1s forwards";
  }, [popAnimation]);

  return (
    <div ref={browserWin} className="embed-window">
      <div className="embed-nav-window">
        <input
          value={embedURL}
          type="text"
          placeholder="https://www.yakraj.com"
        />
        <div
          onClick={() => {
            setpopAnimation("AnimateWindowClose 1s forwards");
          }}
          className="embed-close"
        ></div>
      </div>
      <hr style={{ width: "100%", margin: 0, background: "grey" }} />

      {isloading ? (
        <Loader />
      ) : (
        <div className="rest-website-embed">
          <iframe src={embedURL}></iframe>
        </div>
      )}
    </div>
  );
};
