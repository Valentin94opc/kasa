import React from "react";
import { useGalleryUtils } from "../../../hooks/useGalleryUtils";

import { GalleryCounter } from "./GalleryCounter";
import { NextIcon } from "./NextIcon";
import { PrevIcon } from "./PrevIcon";

import "./style.scss";

export const LodgingGallery = ({ images }: { images: string[] }) => {
  const totalImages = images?.length;
  const {
    imageCurrentIndex,
    currentImage,
    scrollNext,
    scrollPrev,
    isSlideLeftClassName,
    isSlideRightClassName,
  } = useGalleryUtils({ totalImages });

  const commonButtonProps = {
    width: "32",
    height: "32",
    color: "white",
  };

  const GalleryImages = (
    <div className="galleryWrapper">
      <div className="galleryContainer">
        <img
          key={imageCurrentIndex}
          src={images[imageCurrentIndex]}
          className={`${isSlideLeftClassName} ${isSlideRightClassName}`}
          alt="test"
        />
      </div>
      {totalImages <= 1 ? null : (
        <>
          <GalleryCounter
            currentImage={currentImage}
            totalImages={totalImages}
          />
          <button className="prevButton" onClick={scrollPrev}>
            <PrevIcon {...commonButtonProps} />
          </button>
          <button className="nextButton" onClick={scrollNext}>
            <NextIcon {...commonButtonProps} />
          </button>
        </>
      )}
    </div>
  );

  return GalleryImages;
};
