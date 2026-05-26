import { Item } from "../Item";

const RedCrabMeatData = {
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
    id: 31689,
    name: "Red crab meat"
  }
export const RedCrabMeat = Item.fromJson(RedCrabMeatData);
