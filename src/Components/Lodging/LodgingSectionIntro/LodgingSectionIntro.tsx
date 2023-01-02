import React from "react";

export const LodgingSectionIntro = ({
  title,
  location,
}: {
  title: string;
  location: string;
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
};
