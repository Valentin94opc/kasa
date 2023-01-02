import React, { useEffect, useState } from "react";

import fakeLodgingsData from "../assets/data/lodgingData.json";
import { Lodging } from "../types/Lodging";

export const useGetLodgings = () => {
  const [lodgings, setLodgings] = useState<Lodging[]>(fakeLodgingsData);

  return lodgings;
};
