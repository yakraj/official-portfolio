import React, { useContext, useEffect, useRef } from "react";
import { MainContext } from "../conext/main.context";
import "../styles/alert.css";
export const AlertBox = (message) => {
  const alertWindow = useRef();
  const { alertcolour, alertmessage, alertTime } = useContext(MainContext);
  useEffect(() => {
    if (alertcolour && alertmessage) {
      alertWindow.current.style.animation = "AlertOpen 0.5s forwards";
      setTimeout(() => {
        alertWindow.current.style.animation = "alertEnd 0.5s forwards";
      }, 3000);
    }
    return;
  }, [alertcolour, alertmessage, alertTime]);
  return (
    <div ref={alertWindow} className="alert-box-conatiner">
      <div style={{ background: alertcolour }} className="alert-message">
        {alertmessage}
      </div>
    </div>
  );
};
