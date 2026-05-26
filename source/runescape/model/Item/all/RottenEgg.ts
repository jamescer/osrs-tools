import { Item } from "../Item";

const RottenEggData = {
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
    id: 13205,
    name: "Rotten egg"
  }
export const RottenEgg = Item.fromJson(RottenEggData);
