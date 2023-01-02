import React, { PropsWithChildren } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import "./style.scss";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="layoutWrapper">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};
