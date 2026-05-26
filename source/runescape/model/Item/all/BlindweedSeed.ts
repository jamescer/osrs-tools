import { Item } from "../Item";

const BlindweedSeedData = {
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
    id: 6710,
    name: "Blindweed seed"
  }
export const BlindweedSeed = Item.fromJson(BlindweedSeedData);
