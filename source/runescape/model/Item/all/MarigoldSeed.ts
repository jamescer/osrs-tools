import { Item } from "../Item";

const MarigoldSeedData = {
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
    id: 5096,
    name: "Marigold seed"
  }
export const MarigoldSeed = Item.fromJson(MarigoldSeedData);
