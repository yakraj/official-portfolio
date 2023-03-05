import React, { useState, useEffect, useRef, useContext } from "react";
import "../styles/contact.sec.css";
import emailjs from "emailjs-com";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MainContext } from "../conext/main.context";
// import nodemailer from "nodemailer";
export const ContactSec = () => {
  const contactsec = useRef();
  const [name, onname] = useState();
  const [emailadd, onemailadd] = useState();
  const [message, onmessage] = useState();
  const { setalertcolour, setalertmessage, setalertTime } =
    useContext(MainContext);
  const templateParams = {
    name: name,
    email: emailadd,
    notes: message,
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactsec.current,
        start: `center bottom`,
        end: `+=${window.innerHeight / 4}`,
        // markers: true,
        scrub: 1,
      },
    });
    tl.to(contactsec.current, {
      // background: "red",
      opacity: 1,
      // zIndex: 5000,
    });
    // <AlertBox message="it should work now" />;
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
            setalertcolour("green");
            setalertTime(new Date());
            setalertmessage("Thanks ...! Your message successfully sent.");
          },
          (err) => {
            setalertcolour("red");
            setalertTime(new Date());
            setalertmessage(
              "Sorry for unconvinence, We been unable to process your message"
            );
          }
        );
    } else {
      setalertTime(new Date());
      setalertcolour("red");
      setalertmessage("Please Fill required fields with valid data");
    }
  };

  return (
    <>
      <div ref={contactsec} id="contact-section">
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
