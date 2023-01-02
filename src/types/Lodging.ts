import { Host } from "./Host";

export interface Lodging {
  id: string;
  title: string;
  pictures: string[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}
