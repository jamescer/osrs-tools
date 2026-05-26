import { Item } from "../Item";

const ZombieMaskData = {
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
    id: 7594,
    name: "Zombie mask"
  }
export const ZombieMask = Item.fromJson(ZombieMaskData);
