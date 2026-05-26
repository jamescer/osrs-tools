import { Item } from "../Item";

const RosewoodSeedData = {
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
    id: 31551,
    name: "Rosewood seed"
  }
export const RosewoodSeed = Item.fromJson(RosewoodSeedData);
