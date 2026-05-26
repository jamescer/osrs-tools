import { Item } from "../Item";

const GoldenHaddockData = {
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
    id: 31412,
    name: "Golden haddock"
  }
export const GoldenHaddock = Item.fromJson(GoldenHaddockData);
