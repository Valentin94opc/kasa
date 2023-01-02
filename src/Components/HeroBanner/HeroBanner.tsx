import React, { ReactNode } from "react";

import "./herobanner.scss";

interface HeroBannerProps {
  imageLink: string;
  altText: string;
  TitleComponent?: ReactNode;
}

export const HeroBanner = ({
  imageLink,
  altText,
  TitleComponent,
}: HeroBannerProps) => {
  const PossibleTitleComponent = TitleComponent ? (
    <div className="titleWrapper">{TitleComponent}</div>
  ) : null;

  return (
    <div className="heroBannerContainer">
      <img src={imageLink} alt={altText} />
      {PossibleTitleComponent}
    </div>
  );
};
