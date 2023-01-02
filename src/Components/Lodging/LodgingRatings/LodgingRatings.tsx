import React from "react";
import { Star } from "./Star";

import "./style.scss";

export type Rating = "1" | "2" | "3" | "4" | "5";

export const LodgingRatings = ({ rating }: { rating: Rating }) => {
  const convertStringRatingToNumber = (rating: string) => +rating;

  const starsFactory = (color: string, key: string) => {
    return (
      <li key={key}>
        <Star width="20" height="20" color={color} />
      </li>
    );
  };

  const convertNumberToArray = (number: number) => {
    return Array.from(Array(number).keys());
  };

  const generateRatings = (rating: string) => {
    const maxRate = 5;
    const currentRate = convertStringRatingToNumber(rating);

    const emptyStars = maxRate - currentRate;

    const positiveRatingsArray = convertNumberToArray(currentRate).map(
      (index) => {
        return starsFactory("#ff6060", `positive rating ${index}`);
      }
    );

    const negativeRatingsArray = convertNumberToArray(emptyStars).map(
      (index) => {
        return starsFactory("#f6f6f6", `negative rating ${index}`);
      }
    );

    return [...positiveRatingsArray, ...negativeRatingsArray];
  };

  const GeneratedRatings = generateRatings(rating);

  return <ul className="ratingsContainer">{GeneratedRatings}</ul>;
};
