import { Item } from "../Item";

const RawFishcakeData = {
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
    id: 7529,
    name: "Raw fishcake"
  }
export const RawFishcake = Item.fromJson(RawFishcakeData);
