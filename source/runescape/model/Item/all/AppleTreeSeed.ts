import { Item } from "../Item";

const AppleTreeSeedData = {
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
    id: 5283,
    name: "Apple tree seed"
  }
export const AppleTreeSeed = Item.fromJson(AppleTreeSeedData);
