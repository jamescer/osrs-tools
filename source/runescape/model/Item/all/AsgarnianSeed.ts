import { Item } from "../Item";

const AsgarnianSeedData = {
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
    id: 5308,
    name: "Asgarnian seed"
  }
export const AsgarnianSeed = Item.fromJson(AsgarnianSeedData);
