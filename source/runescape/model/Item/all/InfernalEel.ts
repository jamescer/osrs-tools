import { Item } from "../Item";

const InfernalEelData = {
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
    id: 21293,
    name: "Infernal eel"
  }
export const InfernalEel = Item.fromJson(InfernalEelData);
