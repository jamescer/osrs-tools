import { Item } from "../Item";

const PolishingRockData = {
    examine: "",
    value: 0,
    highAlch: 0,
    lowAlch: 0,
    weight: 0,
    members: false,
    tradeable: false,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "",
    id: 24262,
    name: "Polishing rock"
  }
export const PolishingRock = Item.fromJson(PolishingRockData);
