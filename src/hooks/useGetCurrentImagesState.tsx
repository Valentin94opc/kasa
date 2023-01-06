import React, {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export const useGetCurrentImagesState = ({
  ref,
}: {
  ref: MutableRefObject<HTMLDivElement> | MutableRefObject<null>;
}) => {
  const [imageWidth, setImageWidth] = useState(1);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const scrollLeft = ref?.current?.scrollLeft;
      const imagesWidth = parseInt(
        getComputedStyle(ref.current!?.children[0])?.width
      );

      setImageWidth(imagesWidth);
    });
  }, [ref]);

  return { imageWidth };
};
