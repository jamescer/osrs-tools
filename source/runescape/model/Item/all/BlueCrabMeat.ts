import { Item } from "../Item";

const BlueCrabMeatData = {
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
    id: 31695,
    name: "Blue crab meat"
  }
export const BlueCrabMeat = Item.fromJson(BlueCrabMeatData);
