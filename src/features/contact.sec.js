import React, { useState, useEffect } from "react";
import "../styles/contact.sec.css";
import emailjs from "emailjs-com";
import { AlertBox } from "./alert.box";
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
  useEffect(() => {
    <AlertBox message="it should work now" />;
  }, []);
  const SendNow = () => {
    if (name && message && emailadd.includes("@") && emailadd.includes(".")) {
      console.log(name, message, emailadd);
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
    } else {
      window.alert("Please fill valied fields");
    }
  };

  return (
    <>
      <div id="contact-section">
        <h1>Contact Me</h1>

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
