import React from "react";
import { useLocation } from "react-router-dom";
import { NavItems } from "./NavItems";

import "./navigation.scss";

export const Navigation = () => {
  const location = useLocation();

  const navPaths = [
    { pathname: "/", text: "Accueil" },
    { pathname: "/about", text: "À propos" },
  ];

  const GeneratedNavItems = navPaths.map((item, index) => {
    const { pathname, text } = item;
    const isNavItemActive = location.pathname === pathname;

    return (
      <NavItems
        key={index}
        pathname={pathname}
        isActive={isNavItemActive}
        displayedText={text}
      />
    );
  });

  return (
    <nav>
      <ul className="navList">{GeneratedNavItems}</ul>
    </nav>
  );
};
