import { Item } from "../Item";

const RedwoodTreeSeedData = {
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
    id: 22871,
    name: "Redwood tree seed"
  }
export const RedwoodTreeSeed = Item.fromJson(RedwoodTreeSeedData);
