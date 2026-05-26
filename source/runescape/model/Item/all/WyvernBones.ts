import { Item } from "../Item";

const WyvernBonesData = {
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
    id: 6812,
    name: "Wyvern bones"
  }
export const WyvernBones = Item.fromJson(WyvernBonesData);
