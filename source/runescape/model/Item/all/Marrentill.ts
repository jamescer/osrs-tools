import { Item } from "../Item";

const MarrentillData = {
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
    id: 251,
    name: "Marrentill"
  }
export const Marrentill = Item.fromJson(MarrentillData);
