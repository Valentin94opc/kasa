import React from "react";
import { Logo } from "../Shared/Logo/Logo";

import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <Logo color={"#e5e5e5"} width={"75"} height={"25"} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
