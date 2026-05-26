import { Item } from "../Item";

const TomeOfTheSunData = {
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
    id: 23506,
    name: "Tome of the sun"
  }
export const TomeOfTheSun = Item.fromJson(TomeOfTheSunData);
