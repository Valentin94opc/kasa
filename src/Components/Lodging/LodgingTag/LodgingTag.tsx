import React from "react";

import "./style.scss";

export const LodgingTag = ({ tagName }: { tagName: string }) => {
  return <li className="tagContainer">{tagName}</li>;
};
