import React, { useState } from "react";

type SlideDirection = "left" | "right" | null;

export const useGalleryUtils = ({ totalImages }: { totalImages: number }) => {
  const [imageCurrentIndex, setImageCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>(null);

  const currentImage = imageCurrentIndex + 1;
  const lastImageIndex = totalImages - 1;

  const isSlideLeftClassName = slideDirection === "left" ? "slideLeft" : "";
  const isSlideRightClassName = slideDirection === "right" ? "slideRight" : "";

  const scrollNext = () => {
    if (imageCurrentIndex === lastImageIndex) {
      setSlideDirection("left");
      setImageCurrentIndex(0);
      return;
    }
    setSlideDirection("right");
    setImageCurrentIndex((state) => state + 1);
  };

  const scrollPrev = () => {
    if (imageCurrentIndex === 0) {
      setSlideDirection("right");
      setImageCurrentIndex(lastImageIndex);
      return;
    }
    setSlideDirection("left");
    setImageCurrentIndex((state) => state - 1);
  };

  return {
    imageCurrentIndex,
    currentImage,
    scrollNext,
    scrollPrev,
    isSlideLeftClassName,
    isSlideRightClassName,
  };
};
