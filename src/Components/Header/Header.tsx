import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Shared/Logo/Logo";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <Logo color={"#ff6060"} width={"125"} height={"50"} />
      <Navigation />
    </header>
  );
};
