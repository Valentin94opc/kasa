import React from "react";
import "./style.scss";
interface GalleryCounterProps {
  currentImage: number;
  totalImages: number;
}

export const GalleryCounter = ({
  currentImage,
  totalImages,
}: GalleryCounterProps) => {
  return <p className="galleryCounter">{`${currentImage}/${totalImages}`}</p>;
};
