import { Item } from "../Item";

const GuamSeedData = {
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
    id: 5291,
    name: "Guam seed"
  }
export const GuamSeed = Item.fromJson(GuamSeedData);
