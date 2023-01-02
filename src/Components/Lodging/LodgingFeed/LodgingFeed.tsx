import React from "react";
import { useGetLodgings } from "../../../hooks/useGetLodgings";
import { LodgingCard } from "../LodgingCard/LodgingCard";

import "./style.scss";

export const LodgingFeed = () => {
  const lodgings = useGetLodgings();

  const GeneratedFeed = lodgings.map((lodging) => {
    return <LodgingCard key={lodging?.id} lodging={lodging} />;
  });

  return (
    <section>
      <ul className="lodgingFeedContainer">{GeneratedFeed}</ul>
    </section>
  );
};
