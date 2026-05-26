import { Item } from "../Item";

const RawBirdMeatData = {
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
    id: 9978,
    name: "Raw bird meat"
  }
export const RawBirdMeat = Item.fromJson(RawBirdMeatData);
