import { Item } from "../Item";

const RedberrySeedData = {
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
    id: 5101,
    name: "Redberry seed"
  }
export const RedberrySeed = Item.fromJson(RedberrySeedData);
