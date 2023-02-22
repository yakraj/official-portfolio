import React from "react";
import "../styles/social-media.css";
export const SocialMedia = () => {
  return (
    <>
      <div
        style={{ position: "absolute", right: "281px", top: "15%" }}
        id="container"
      >
        <div style={{ position: "relative" }}>
          <a href="https://youtube.com/@yakraj" target="_blank">
            <div class="parentImage youtube">
              <img src={require("../assets/youtube.png")} alt="youtube" />
              <h3>@Yakraj</h3>
            </div>
          </a>
          <a href="https://www.twitter.com/@yakrajpariyar" target="_blank">
            <div class="parentImage twitter">
              <img src={require("../assets/twitter.png")} alt="twitter" />
              <h3>@YakrajPariyar</h3>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/yakraj" target="_blank">
            <div class="parentImage linkedin">
              <img src={require("../assets/linkedin.png")} alt="linkedin" />
              <h3>@YakrajPariyar</h3>
            </div>
          </a>
          <a href="https://www.github.com/yakraj" target="_blank">
            <div class="parentImage github">
              <img src={require("../assets/github.webp")} alt="linkedin" />
              <h3>@Yakraj</h3>
            </div>
          </a>
          <a href="https://www.yakraj.com" target="_blank">
            <div class="parentImage website">
              <img src={require("../assets/website.webp")} alt="linkedin" />
              <h3>Yakraj.com</h3>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
