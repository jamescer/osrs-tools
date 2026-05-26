import { Item } from "../Item";

const LimpwurtSeedData = {
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
    id: 5100,
    name: "Limpwurt seed"
  }
export const LimpwurtSeed = Item.fromJson(LimpwurtSeedData);
