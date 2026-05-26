import { Item } from "../Item";

const BurntBeastMeatData = {
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
    id: 9990,
    name: "Burnt beast meat"
  }
export const BurntBeastMeat = Item.fromJson(BurntBeastMeatData);
