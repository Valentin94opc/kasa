import React from "react";

import "./style.scss";

export const LodgingHost = ({
  name,
  picture,
}: {
  name: string;
  picture: string;
}) => {
  return (
    <div className="lodgingHostContainer">
      <div className="hostName">{name}</div>
      <div>
        <img src={picture} alt={`Avatar de ${name}`} />
      </div>
    </div>
  );
};
