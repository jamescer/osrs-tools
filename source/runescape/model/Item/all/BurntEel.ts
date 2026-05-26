import { Item } from "../Item";

const BurntEelData = {
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
    id: 3383,
    name: "Burnt eel"
  }
export const BurntEel = Item.fromJson(BurntEelData);
