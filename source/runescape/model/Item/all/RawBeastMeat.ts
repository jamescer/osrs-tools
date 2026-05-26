import { Item } from "../Item";

const RawBeastMeatData = {
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
    id: 9986,
    name: "Raw beast meat"
  }
export const RawBeastMeat = Item.fromJson(RawBeastMeatData);
