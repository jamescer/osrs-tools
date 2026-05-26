import { Item } from "../Item";

const AppleBarrelData = {
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
    id: 6094,
    name: "Apple barrel"
  }
export const AppleBarrel = Item.fromJson(AppleBarrelData);
