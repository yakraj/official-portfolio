import React, { useContext, useEffect, useRef } from "react";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { MainContext } from "../conext/main.context";
import { Helmet } from "react-helmet";
import gsap from "gsap";

export const AboutPage = () => {
  const { setpopAnimation } = useContext(MainContext);

  const imageRef = useRef(null);

  const socialIconsRef = useRef(null);

  useEffect(() => {
    const socialIconsElement = socialIconsRef.current;
    const socialIcons = socialIconsElement.getElementsByTagName("a");

    gsap.set(socialIcons, { opacity: 0, y: "50%" });

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });

    tl.fromTo(
      socialIcons,
      { opacity: 0, y: "50%" },
      { opacity: 1, y: "0%", stagger: 0.2 }
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.restart();
        }
      });
    });

    observer.observe(socialIconsElement);

    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, []);

  // this animation for about textAlign
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const textSpans = textElement.querySelectorAll("span");

    gsap.set(textSpans, { opacity: 0, scale: 0.5 });

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.out" },
    });

    tl.fromTo(
      textSpans,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, stagger: 0.2 }
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.restart();
        }
      });
    });

    observer.observe(textElement);

    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, []);
  return (
    <div className="landing-firstpage">
      <Cursor isGelly={true} />
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://yakraj.com/" />
      </Helmet>
      <p
        style={{
          zIndex: 10,
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
        ref={textRef}
      >
        I
        <div data-cursor-exclusion>
          <span>create</span>
        </div>
        things and
        <div data-cursor-exclusion>
          <span>Implement</span>
        </div>
        ideas on the
        <div data-cursor-exclusion>
          <span>internet</span>
        </div>
        . A
        <div data-cursor-exclusion>
          <span>Passinate</span>
        </div>
        developer who filled with
        <div data-cursor-exclusion>
          <span>Thrust</span>
        </div>
        of
        <div data-cursor-exclusion>
          <span>create</span>
        </div>
        ,
        <div data-cursor-exclusion>
          <span>design</span>
        </div>{" "}
        and
        <div data-cursor-exclusion>
          <span>code</span>
        </div>
        . constantly
        <div data-cursor-exclusion>
          <span>seeking</span>
        </div>
        out new
        <div data-cursor-exclusion>
          <span>challenges</span>
        </div>
        that allow me to design and
        <div data-cursor-exclusion>
          <span>build</span>
        </div>
        new
        <div data-cursor-exclusion>
          <span>inventions</span>
        </div>
      </p>

      {/* social media icons  */}
      <div
        style={{ zIndex: 10 }}
        ref={socialIconsRef}
        className="social-media-icons"
      >
        <a href="https://youtube.com/@yakraj" target="_blank" rel="noreferrer">
          <div className="media-icon youtube-icon">
            <img src={require("../assets/youtube.com.png")} alt="youtube" />
          </div>
        </a>

        <a
          href="https://www.twitter.com/@yakrajpariyar"
          target="_blank"
          rel="noreferrer"
        >
          <div className="media-icon twitter-icon">
            <img src={require("../assets/twitter.svg").default} alt="twitter" />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/yakraj"
          target="_blank"
          rel="noreferrer"
        >
          <div className="media-icon linkedin-icon">
            <img
              src={require("../assets/linkedin.svg").default}
              alt="linkedin"
            />
          </div>
        </a>
        <a
          href="https://www.github.com/yakraj"
          target="_blank"
          rel="noreferrer"
        >
          <div className="media-icon github-icon">
            <img src={require("../assets/github.svg").default} alt="linkedin" />
          </div>
        </a>
        <a href="https://www.yakraj.com" target="_blank" rel="noreferrer">
          <div className="media-icon website-icon">
            <img src={require("../assets/internet.png")} alt="linkedin" />
          </div>
        </a>
      </div>
      <div style={{ position: "absolute", zIndex: 1 }}>
        <div className="video-overlay" />
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://res.cloudinary.com/wows/video/upload/v1682192985/y2mate.com_-_Yakraj_Pariyar_PortfolioCreative1_1080p.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
};
