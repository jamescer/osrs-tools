import { Item } from "../Item";

const BreadCookoutData = {
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
    id: 26641,
    name: "Bread (cookout)"
  }
export const BreadCookout = Item.fromJson(BreadCookoutData);
