import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Accordeon } from "../../Components/Accordeon/Accordeon";
import { LodgingGallery } from "../../Components/Lodging/LodgingGallery/LodgingGallery";
import { LodgingHost } from "../../Components/Lodging/LodgingHost/LodgingHost";
import {
  LodgingRatings,
  Rating,
} from "../../Components/Lodging/LodgingRatings/LodgingRatings";
import { LodgingSectionIntro } from "../../Components/Lodging/LodgingSectionIntro/LodgingSectionIntro";
import { TagsList } from "../../Components/Lodging/LodgingTag/TagsList";
import { Lodging } from "../../types/Lodging";

import "./style.scss";

export const LodgingById = () => {
  const location = useLocation();
  const lodging: Lodging | null = location?.state?.lodging || null;

  if (!lodging) return <Navigate to="/" />;

  const { title, tags, host, rating, description, equipments, pictures } =
    lodging;

  const { name, picture } = host;

  const GeneratedDescription = (
    <p className="generatedDescription">{description}</p>
  );

  const GeneratedEquipments = (
    <ul className="generatedEquipments">
      {equipments.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );

  return (
    <>
      <section className="gallerySection">
        <LodgingGallery images={pictures} />
      </section>

      <main>
        <section>
          <div className="entitiesContainer">
            <div className="entitiesWrapper">
              <LodgingSectionIntro title={title} location={lodging?.location} />
              <TagsList tags={tags} />
            </div>
            <div className="entitiesWrapper">
              <LodgingHost name={name} picture={picture} />
              <LodgingRatings rating={rating as Rating} />
            </div>
          </div>

          <div className="accordeonsWrapper">
            <div className="accordeonWrapper">
              <Accordeon
                title="Description"
                DetailsComponent={GeneratedDescription}
                initialToggleState
                customMinHeight="250px"
              />
            </div>
            <div className="accordeonWrapper">
              <Accordeon
                title="Équipements"
                DetailsComponent={GeneratedEquipments}
                initialToggleState
                customMinHeight="250px"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
