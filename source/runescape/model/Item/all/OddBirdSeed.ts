import { Item } from "../Item";

const OddBirdSeedData = {
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
    id: 10178,
    name: "Odd bird seed"
  }
export const OddBirdSeed = Item.fromJson(OddBirdSeedData);
