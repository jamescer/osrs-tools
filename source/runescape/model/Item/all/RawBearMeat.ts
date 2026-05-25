import { Item } from "../Item";

const RawBearMeatData = {{
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
    id: 2136,
    name: "Raw bear meat"
  }
export const RawBearMeat = Item.fromJson(RawBearMeatData);