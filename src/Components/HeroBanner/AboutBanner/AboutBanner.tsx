import React from "react";
import { HeroBanner } from "../HeroBanner";

import aboutBanner from "../../../assets/images/about-banner.jpg";

export const AboutBanner = () => {
  return <HeroBanner imageLink={aboutBanner} altText="Vue sur la montagne" />;
};
