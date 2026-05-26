import { Item } from "../Item";

const OakLeavesData = {
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
    id: 6022,
    name: "Oak leaves"
  }
export const OakLeaves = Item.fromJson(OakLeavesData);
