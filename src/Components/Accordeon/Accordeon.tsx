import React, { ReactNode, useState } from "react";
import { DropdownIcon } from "./DropdownIcon";

import "./style.scss";

export interface AccordeonProps {
  title: string;
  details: string;
  DetailsComponent: ReactNode;
}

export const Accordeon = ({
  title,
  details,
  DetailsComponent,
}: AccordeonProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const isAccordeonDetailsVisible = isToggled
    ? "accordeonDetails accordeonActive"
    : "accordeonDetails";

  const isDropDownActive = isToggled ? "dropdownActive" : "";

  const handleAccordeonVisibility = () => {
    setIsToggled((state) => !state);
  };

  return (
    <div>
      <summary className="accordeonSummary">
        <h3>{title}</h3>
        <button
          className={isDropDownActive}
          onClick={handleAccordeonVisibility}
        >
          <DropdownIcon width="20" height="20" />
        </button>
      </summary>
      <div className={isAccordeonDetailsVisible}>
        <div className="detailsWrapper">{DetailsComponent}</div>
      </div>
    </div>
  );
};
