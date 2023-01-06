import React from "react";

interface GalleryCounterProps {
  currentImage: number;
  totalImages: number;
}

export const GalleryCounter = ({
  currentImage,
  totalImages,
}: GalleryCounterProps) => {
  return <p>{`${currentImage} sur ${totalImages}`}</p>;
};
