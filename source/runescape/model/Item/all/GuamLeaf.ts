import { Item } from "../Item";

const GuamLeafData = {
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
    id: 249,
    name: "Guam leaf"
  }
export const GuamLeaf = Item.fromJson(GuamLeafData);
