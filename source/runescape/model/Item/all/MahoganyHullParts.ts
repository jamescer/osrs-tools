import { Item } from "../Item";

const MahoganyHullPartsData = {
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
    id: 32050,
    name: "Mahogany hull parts"
  }
export const MahoganyHullParts = Item.fromJson(MahoganyHullPartsData);
