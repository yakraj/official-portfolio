import React, { useRef } from "react";
import "../styles/landing.css";
import { CardaPlay } from "../features/small.cards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ContactSec } from "../features/contact.sec";
import { CodingLanguages } from "../features/coding.languages";
import { Portfolio } from "../features/portfolio";
import { FirstLanding } from "../features/firstpage";
import { EmbedWebsite } from "../features/embed.website";
import { AboutPage } from "../features/about.page";
export const Landing = () => {
  const imageRef = useRef(null);

  return (
    <>
      <EmbedWebsite />
      <FirstLanding />
      <AboutPage />
      <CardaPlay />
      <Portfolio />
      <ContactSec />
    </>
  );
};
