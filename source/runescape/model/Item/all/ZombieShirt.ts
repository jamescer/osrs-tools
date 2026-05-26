import { Item } from "../Item";

const ZombieShirtData = {
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
    id: 7592,
    name: "Zombie shirt"
  }
export const ZombieShirt = Item.fromJson(ZombieShirtData);
