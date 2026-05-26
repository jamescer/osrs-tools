import { Item } from "../Item";

const RawUgthankiMeatData = {
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
    id: 1859,
    name: "Raw ugthanki meat"
  }
export const RawUgthankiMeat = Item.fromJson(RawUgthankiMeatData);
