import { Item } from "../Item";

const RoastBeastMeatData = {
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
    id: 9988,
    name: "Roast beast meat"
  }
export const RoastBeastMeat = Item.fromJson(RoastBeastMeatData);
