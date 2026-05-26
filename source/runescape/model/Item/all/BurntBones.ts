import { Item } from "../Item";

const BurntBonesData = {
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
    id: 528,
    name: "Burnt bones"
  }
export const BurntBones = Item.fromJson(BurntBonesData);
