import { Item } from "../Item";

const SpiritSeedData = {
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
    id: 5317,
    name: "Spirit seed"
  }
export const SpiritSeed = Item.fromJson(SpiritSeedData);
