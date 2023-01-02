import React from "react";
import { Link } from "react-router-dom";
import { Lodging } from "../../../types/Lodging";
import "./style.scss";

export const LodgingCard = ({ lodging }: { lodging: Lodging }) => {
  const { id, title } = lodging;

  const navigationProps = {
    pathname: `/lodging/${id}`,
    state: lodging,
  };

  return (
    <li>
      <Link to={navigationProps}>
        <article className="lodgingCardContainer">
          <h3>{title}</h3>
        </article>
      </Link>
    </li>
  );
};
