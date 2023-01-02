import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export const Notfound = () => {
  return (
    <main className="notFoundContainer">
      <div className="notFoundTitleWrapper">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>

      <Link to="/">
        <p className="returnHome">Retourner sur la page d’accueil</p>
      </Link>
    </main>
  );
};
