import { Item } from "../Item";

const SacredEelData = {
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
    id: 13339,
    name: "Sacred eel"
  }
export const SacredEel = Item.fromJson(SacredEelData);
