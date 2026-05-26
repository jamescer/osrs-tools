import { Item } from "../Item";

const RawMarlinData = {
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
    id: 32349,
    name: "Raw marlin"
  }
export const RawMarlin = Item.fromJson(RawMarlinData);
