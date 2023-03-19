import React, { useContext, useRef } from "react";
import Tilt from "react-tilt";
import { MainContext } from "../conext/main.context";
import { Helmet } from "react-helmet";

export const AboutPage = () => {
  const { setpopAnimation } = useContext(MainContext);

  const imageRef = useRef(null);
  return (
    <div className="landing-firstpage">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://yakraj.com/" />
      </Helmet>
      <p>
        I<span>create</span>
        things and
        <span>Implement</span>
        ideas on the
        <span>internet</span>. A<span>Passinate</span>
        developer who filled with
        <span>Thrust</span>
        of
        <span>create</span>,<span>design</span> and
        <span>code</span>. constantly
        <span>seeking</span>
        out new
        <span>challenges</span>
        that allow me to design and
        <span>build</span>
        new
        <span>inventions</span>
      </p>

      {/* social media icons  */}
      <div className="social-media-icons">
        <a href="https://youtube.com/@yakraj" target="_blank">
          <div className="media-icon youtube-icon">
            <img src={require("../assets/youtube.com.png")} alt="youtube" />
          </div>
        </a>

        <a href="https://www.twitter.com/@yakrajpariyar" target="_blank">
          <div className="media-icon twitter-icon">
            <img src={require("../assets/twitter.svg").default} alt="twitter" />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/yakraj" target="_blank">
          <div className="media-icon linkedin-icon">
            <img
              src={require("../assets/linkedin.svg").default}
              alt="linkedin"
            />
          </div>
        </a>
        <a href="https://www.github.com/yakraj" target="_blank">
          <div className="media-icon github-icon">
            <img src={require("../assets/github.svg").default} alt="linkedin" />
          </div>
        </a>
        <a href="https://www.yakraj.com" target="_blank">
          <div className="media-icon website-icon">
            <img src={require("../assets/internet.png")} alt="linkedin" />
          </div>
        </a>
      </div>
    </div>
  );
};
