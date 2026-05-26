import { Item } from "../Item";

const SweetcornSeedData = {
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
    id: 5320,
    name: "Sweetcorn seed"
  }
export const SweetcornSeed = Item.fromJson(SweetcornSeedData);
