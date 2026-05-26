import { Item } from "../Item";

const LogavanoSeedData = {
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
    id: 13425,
    name: "Logavano seed"
  }
export const LogavanoSeed = Item.fromJson(LogavanoSeedData);
