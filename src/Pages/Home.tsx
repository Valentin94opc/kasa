import React from "react";

import { HomeBanner } from "../Components/HeroBanner/HomeBanner/HomeBanner";
import { LodgingFeed } from "../Components/Lodging/LodgingFeed/LodgingFeed";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <main>
        <LodgingFeed />
      </main>
    </>
  );
};
