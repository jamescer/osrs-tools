import { Item } from "../Item";

const RawYakMeatData = {
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
    id: 10816,
    name: "Raw yak meat"
  }
export const RawYakMeat = Item.fromJson(RawYakMeatData);
