import React, { useRef, useState } from "react";

import "./style.scss";

export const LodgingGallery = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const ref = useRef<null | HTMLInputElement>(null);

  const handleNext = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current!.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current!.children[0]).width
      );
      ref.current!.scrollLeft = scrollLeft + itemWidth;
    });
  };

  const handlePrev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current!.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current!.children[0]).width
      );
      ref.current!.scrollLeft = scrollLeft - itemWidth;
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
            Prev
          </button>
          <button className="nextButton" onClick={handleNext}>
            Next
          </button>
        </>
      )}
    </div>
  );

  return GalleryImages;
};
