import React from "react";
import { HeroBanner } from "../HeroBanner";
import homeBannerImg from "../../../assets/images/home-banner.jpg";
import { HomeBannerTitle } from "./HomeBannerTitle";

export const HomeBanner = () => {
  return (
    <section>
      <div className="homeBannerWrapper">
        <HeroBanner
          imageLink={homeBannerImg}
          altText="Paysage rocheux et embrumé"
          TitleComponent={<HomeBannerTitle />}
        />
      </div>
    </section>
  );
};
