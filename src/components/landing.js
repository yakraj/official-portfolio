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
import { ScrollTriggerTrial } from "../features/scrolltrigger";
import { AlertBox } from "../features/alert.box";
import { WebsiteInfo } from "../features/website.images";
import { MoreWork } from "../features/more.work";
import { SmallProjects } from "../features/small.projects";
import { YoutubeVideo } from "../features/youtube.video";

export const Landing = () => {
  return (
    <>
      <YoutubeVideo />
      <EmbedWebsite />
      <MoreWork />
      <SmallProjects />
      <WebsiteInfo />
      <FirstLanding />
      <AboutPage />
      <AlertBox />
      <CardaPlay />
      <ScrollTriggerTrial />
      {/* <Portfolio /> */}
      <ContactSec />
    </>
  );
};
