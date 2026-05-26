import { Item } from "../Item";

const MixedHideBaseData = {
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
    id: 29292,
    name: "Mixed hide base"
  }
export const MixedHideBase = Item.fromJson(MixedHideBaseData);
