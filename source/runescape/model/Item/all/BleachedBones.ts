import { Item } from "../Item";

const BleachedBonesData = {
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
    id: 25422,
    name: "Bleached bones"
  }
export const BleachedBones = Item.fromJson(BleachedBonesData);
