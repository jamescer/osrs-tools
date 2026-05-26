import { Item } from "../Item";

const TeakHullPartsData = {
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
    id: 32047,
    name: "Teak hull parts"
  }
export const TeakHullParts = Item.fromJson(TeakHullPartsData);
