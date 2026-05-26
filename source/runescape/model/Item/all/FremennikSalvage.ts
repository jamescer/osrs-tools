import { Item } from "../Item";

const FremennikSalvageData = {
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
    id: 32859,
    name: "Fremennik salvage"
  }
export const FremennikSalvage = Item.fromJson(FremennikSalvageData);
