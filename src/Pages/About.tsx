import React from "react";
import { AccordeonFeed } from "../Components/Accordeon/AccordeonFeed/AccordeonFeed";
import { AboutBanner } from "../Components/HeroBanner/AboutBanner/AboutBanner";

export const About = () => {
  return (
    <>
      <AboutBanner />
      <main>
        <AccordeonFeed />
      </main>
    </>
  );
};
