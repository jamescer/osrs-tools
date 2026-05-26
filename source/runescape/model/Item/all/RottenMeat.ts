import { Item } from "../Item";

const RottenMeatData = {
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
    id: 25287,
    name: "Rotten meat"
  }
export const RottenMeat = Item.fromJson(RottenMeatData);
