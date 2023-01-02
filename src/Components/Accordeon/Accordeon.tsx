import React, { ReactNode, useState } from "react";
import { DropdownIcon } from "./DropdownIcon";

import "./style.scss";

export interface AccordeonProps {
  title: string;
  initialToggleState?: boolean;
  DetailsComponent: ReactNode;
  customMinHeight?: string;
}

export const Accordeon = ({
  title,
  initialToggleState = false,
  DetailsComponent,
  customMinHeight = "",
}: AccordeonProps) => {
  const [isToggled, setIsToggled] = useState(initialToggleState);

  const isAccordeonDetailsVisible = isToggled
    ? "accordeonDetails accordeonActive"
    : "accordeonDetails";

  const isDropDownActive = isToggled ? "dropdownActive" : "";

  const handleAccordeonVisibility = () => {
    setIsToggled((state) => !state);
  };

  const minHeight = { minHeight: isToggled ? customMinHeight : "" };

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
      <div className={isAccordeonDetailsVisible} style={minHeight}>
        <div className="detailsWrapper">{DetailsComponent}</div>
      </div>
    </div>
  );
};
