import React from "react";
import { LodgingTag } from "./LodgingTag";

import "./style.scss";

export const TagsList = ({ tags }: { tags: string[] }) => {
  const GeneratedTags = tags.map((tag, index) => {
    return <LodgingTag key={index} tagName={tag} />;
  });

  return <ul className="tagsList">{GeneratedTags}</ul>;
};
