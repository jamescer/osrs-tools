import { Item } from "../Item";

const ZombieTrousersData = {
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
    id: 7593,
    name: "Zombie trousers"
  }
export const ZombieTrousers = Item.fromJson(ZombieTrousersData);
