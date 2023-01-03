import React, { useRef, useState } from "react";
import { NextIcon } from "./NextIcon";
import { PrevIcon } from "./PrevIcon";

import "./style.scss";

export const LodgingGallery = ({ images }: { images: string[] }) => {
  const totalImages = images.length;

  const ref = useRef<null | HTMLInputElement>(null);

  const handleNext = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current!.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current!.children[0]).width
      );

      if (ref.current!.scrollLeft === itemWidth * (totalImages - 1))
        return (ref.current!.scrollLeft = 0);
      return (ref.current!.scrollLeft = scrollLeft + itemWidth);
    });
  };

  const handlePrev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current!.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current!.children[0]).width
      );
      if (ref.current!.scrollLeft === 0)
        return (ref.current!.scrollLeft = scrollLeft + itemWidth * totalImages);
      return (ref.current!.scrollLeft = scrollLeft - itemWidth);
    });
  };

  const GalleryImages = (
    <div className="galleryWrapper">
      <div className="galleryContainer" ref={ref}>
        {images.map((image, index) => {
          return <img key={index} src={image} alt="nope" />;
        })}
      </div>
      {totalImages === 0 ? null : (
        <>
          <button className="prevButton" onClick={handlePrev}>
            <PrevIcon width="32" height="32" color="white" />
          </button>
          <button className="nextButton" onClick={handleNext}>
            <NextIcon width="32" height="32" color="white" />
          </button>
        </>
      )}
    </div>
  );

  return GalleryImages;
};
