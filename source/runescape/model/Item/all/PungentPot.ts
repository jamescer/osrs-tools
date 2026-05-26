import { Item } from "../Item";

const PungentPotData = {
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
    id: 1812,
    name: "Pungent pot"
  }
export const PungentPot = Item.fromJson(PungentPotData);
