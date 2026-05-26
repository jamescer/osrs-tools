import { Item } from "../Item";

const TarrominSeedData = {
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
    id: 5293,
    name: "Tarromin seed"
  }
export const TarrominSeed = Item.fromJson(TarrominSeedData);
