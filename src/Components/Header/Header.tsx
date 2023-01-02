import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Shared/Logo/Logo";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <Logo color={"#ff6060"} width={"150"} height={"50"} />
      <Navigation />
    </header>
  );
};
