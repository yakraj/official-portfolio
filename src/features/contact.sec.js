import React, { useState, useEffect, useRef, useContext } from "react";
import "../styles/contact.sec.css";
import emailjs from "emailjs-com";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MainContext } from "../conext/main.context";
import { Helmet } from "react-helmet";
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

  // animation

  const titleRef = useRef(null);
  const inputRefs = useRef([]);
  const textareaRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const inputElements = inputRefs.current;
    const textareaElement = textareaRef.current;
    const buttonElement = buttonRef.current;

    gsap.set([titleElement, inputElements, textareaElement, buttonElement], {
      opacity: 0,
      y: 50,
    });

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.out" },
    });

    tl.fromTo(titleElement, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
      .fromTo(
        inputElements,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "-=0.4"
      )
      .fromTo(
        [textareaElement, buttonElement],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.4"
      );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.restart();
        }
      });
    });

    observer.observe(titleElement);

    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, []);

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
      <div data-cursor-exclusion ref={contactsec} id="contact-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`Yakraj Pariyar`}</title>
          <link rel="canonical" href="http://yakraj.com/" />
        </Helmet>
        <h1 ref={titleRef}>Contact Me</h1>

        <div className="contact-lists">
          <div className="leftside-contct">
            <input
              ref={(el) => (inputRefs.current[0] = el)}
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
              ref={(el) => (inputRefs.current[1] = el)}
              value={emailadd}
              onChange={(e) => onemailadd(e.target.value)}
              placeholder="Email"
              className="sender-email"
              type="email"
            />
          </div>

          <div className="rightside-contct">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => {
                onmessage(e.target.value);
              }}
              placeholder="Your Message here..."
            />
          </div>
        </div>
        <button
          ref={buttonRef}
          onClick={() => SendNow()}
          className="send-mail-button"
        >
          <p>Submit</p>
        </button>
      </div>
    </>
  );
};
