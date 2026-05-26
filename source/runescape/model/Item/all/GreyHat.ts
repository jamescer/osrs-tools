import { Item } from "../Item";

const GreyHatData = {
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
    id: 2900,
    name: "Grey hat"
  }
export const GreyHat = Item.fromJson(GreyHatData);
