import { Item } from "../Item";

const ZogreBonesData = {
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
    id: 4812,
    name: "Zogre bones"
  }
export const ZogreBones = Item.fromJson(ZogreBonesData);
