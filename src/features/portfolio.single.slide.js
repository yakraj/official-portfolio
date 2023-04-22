import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Loading } from "../components/loading.gif";
import { MainContext } from "../conext/main.context";

export const SingleSlide = (data) => {
  const { setpopWindowInfo, isLoadingMega } = useContext(MainContext);

  return (
    <>
      {!isLoadingMega && !data ? (
        <Loading />
      ) : (
        <div className="single-slide">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{`${"title"}`}</title>
            <link rel="canonical" href="https://yakraj.com" />
            <meta name="description" content={"description"} />
          </Helmet>
          <div className="portfolio-leftside">
            <div className="image-card-container">
              <div className="image-card-right">
                <div className="imagecard-parent">
                  <div className="image-card grid-first-child">
                    <img
                      src="https://yakraj.com/images/data-entry.png"
                      alt="google"
                    />
                  </div>
                  <div className="grid-third-child">
                    <h1>{"INDUSTRIAL"}</h1>
                  </div>
                  <div className="grid-second-child">
                    <h1>{data.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-rightside">
            <div className="app-description">
              <p>
                <span> “ </span>
                {data.description.split(0, 200)}
                <span> ”</span>
              </p>
            </div>
            {/* creating key here */}
            {/* <div className="keys-text-continer">
            <div className="key-container">
              <div className="key-holder" />
              <div className="key-shaft">Keys</div>
            </div>
            <h1>Responsive</h1>
          </div>
          <hr style={{ width: "70%", height: "2px" }} /> */}
            <h1 className="gallerytext">Gallery</h1>
            <div className="gallery-more-button">
              <div> More</div>
            </div>
            <div className="images-slide">
              <div
                onClick={() => {
                  setpopWindowInfo("AnimateWindow 1s forwards");
                }}
                className="imgcard"
              >
                <img
                  src="https://yakraj.com/images/data-entry.png"
                  alt="google"
                />
                <div className="sectionName">Export Section</div>
              </div>
              <div className="imgcard">
                <img
                  src="https://yakraj.com/images/data-entry.png"
                  alt="google"
                />
                <div className="sectionName">Export Section</div>
              </div>
              <div className="imgcard">
                <img
                  src="https://yakraj.com/images/data-entry.png"
                  alt="google"
                />
                <div className="sectionName">Export Section</div>
              </div>
              <div className="imgcard">
                <img
                  src="https://yakraj.com/images/data-entry.png"
                  alt="google"
                />
                <div className="sectionName">
                  Export Sectio as;ldjkfasldfkj as;dflkjasd;ofiuwerk n
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
