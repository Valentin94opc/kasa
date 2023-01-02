import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

interface LinkProps {
  pathname: string;
  isActive: boolean;
  displayedText: string;
}

export const NavItems = ({ pathname, isActive, displayedText }: LinkProps) => {
  const isLinkActive = isActive ? "active" : "";

  return (
    <Link to={pathname} className={isLinkActive}>
      <li>{displayedText}</li>
    </Link>
  );
};
