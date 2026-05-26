import { Item } from "../Item";

const CamphorHullPartsData = {
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
    id: 32053,
    name: "Camphor hull parts"
  }
export const CamphorHullParts = Item.fromJson(CamphorHullPartsData);
