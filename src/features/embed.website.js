import React, { useEffect } from "react";
import "../styles/popup.window.css";
export const EmbedWebsite = (url) => {
  useEffect(() => {}, []);

  return (
    <div className="embed-window">
      <div className="embed-nav-window">
        <input type="text" placeholder="https://www.yakraj.com" />

        <div className="embed-close"></div>
      </div>
      <div className="rest-website-embed"></div>
    </div>
  );
};
