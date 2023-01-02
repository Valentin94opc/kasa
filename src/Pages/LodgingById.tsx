import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LodgingHost } from "../Components/Lodging/LodgingHost/LodgingHost";
import { LodgingSectionIntro } from "../Components/Lodging/LodgingSectionIntro/LodgingSectionIntro";
import { TagsList } from "../Components/Lodging/LodgingTag/TagsList";
import { Lodging } from "../types/Lodging";

export const LodgingById = () => {
  const location = useLocation();
  const lodging: Lodging | null = location?.state?.lodging || null;

  if (!lodging) return <Navigate to="/" />;

  const { title, tags, host } = lodging;

  const { name, picture } = host;

  return (
    <>
      <section>
        <div>Gallery Here</div>
      </section>

      <main>
        <section>
          <LodgingSectionIntro title={title} location={lodging?.location} />
          <TagsList tags={tags} />
          <LodgingHost name={name} picture={picture} />
        </section>
      </main>
    </>
  );
};
