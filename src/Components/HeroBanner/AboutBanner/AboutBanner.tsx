import React from "react";
import { HeroBanner } from "../HeroBanner";

import "./style.scss";

import aboutBanner from "../../../assets/images/about-banner.jpg";

export const AboutBanner = () => {
  return (
    <div className="aboutBannerWrapper">
      <HeroBanner imageLink={aboutBanner} altText="Vue sur la montagne" />
    </div>
  );
};
