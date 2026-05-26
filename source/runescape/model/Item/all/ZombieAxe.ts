import { Item } from "../Item";

const ZombieAxeData = {
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
    id: 28810,
    name: "Zombie axe"
  }
export const ZombieAxe = Item.fromJson(ZombieAxeData);
