import { Item } from "../Item";

const CaveEelData = {
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
    id: 5003,
    name: "Cave eel"
  }
export const CaveEel = Item.fromJson(CaveEelData);
