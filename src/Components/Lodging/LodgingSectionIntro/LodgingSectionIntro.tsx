import React from "react";

import "./style.scss";

export const LodgingSectionIntro = ({
  title,
  location,
}: {
  title: string;
  location: string;
}) => {
  return (
    <div className="lodgingSectionIntroContainer">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
};
