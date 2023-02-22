import React, { useState, useEffect } from "react";
import "../styles/contact.sec.css";
import emailjs from "emailjs-com";

// import nodemailer from "nodemailer";
export const ContactSec = () => {
  const [name, onname] = useState();
  const [emailadd, onemailadd] = useState();
  const [message, onmessage] = useState();

  const templateParams = {
    name: name,
    email: emailadd,
    notes: message,
  };

  const SendNow = () =>
    emailjs
      .send(
        "service_0h0znkk",
        "template_sbt6r2z",
        templateParams,
        "k9aK2Ha2qHgCQJvkp"
      )
      .then(
        (response) => {
          onname("");
          onemailadd("");
          onmessage("");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

  return (
    <>
      <div id="contact-section">
        <h1>Contact Me</h1>
        <hr
          style={{
            width: "60%",
            height: "3px",
            background: "skyblue",
            borderRadius: "15px",
            outline: "none",
          }}
        />
        <div className="contact-lists">
          <div className="leftside-contct">
            <input
              value={name}
              style={{
                textTransform: "capitalize",
              }}
              onChange={(e) => onname(e.target.value)}
              placeholder="Name"
              className="sender-name"
              type="text"
            />
            <input
              value={emailadd}
              onChange={(e) => onemailadd(e.target.value)}
              placeholder="Email"
              className="sender-email"
              type="email"
            />
          </div>
          <hr
            vertical
            style={{
              width: "2px",
              // height: "5px",
              background: "skyblue",
              borderRadius: "15px",
            }}
          />
          <div className="rightside-contct">
            <textarea
              value={message}
              onChange={(e) => {
                onmessage(e.target.value);
              }}
              placeholder="Your Message here..."
            />
          </div>
        </div>
        <button onClick={() => SendNow()} className="send-mail-button">
          <p>Submit</p>
        </button>
      </div>
    </>
  );
};
