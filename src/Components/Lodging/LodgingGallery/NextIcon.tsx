import React from "react";
import { SvgProps } from "../../../types/SvgProps";

export const NextIcon = ({ width, height, color }: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
        fill={color}
      />
    </svg>
  );
};