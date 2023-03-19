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
export const SmallProjects = (url) => {
  const browserWin = useRef(null);
  const {
    popSProjects,
    setpopSProjects,
    embedURL,
    SmallProjects,
    isLoadingSmall,
  } = useContext(MainContext);
  const [isloading, onisloading] = useState(false);

  useEffect(() => {
    browserWin.current.style.animation = popSProjects;
    onisloading(true);
    setTimeout(() => {
      onisloading(false);
    }, 2000);

    // browserWin.current.style.animation = "AnimateWindow 1s forwards";
    // browserWin.current.style.animation = "AnimateWindowClose 1s forwards";
  }, [popSProjects]);

  const mapp = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
    8, 9,
  ];
  return (
    <div ref={browserWin} class="embed-window">
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
            <Loading />
          ) : (
            SmallProjects.map(() => {
              return (
                <div class="component-card" message="Micro Hardness Tester">
                  <h3>card component</h3>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
