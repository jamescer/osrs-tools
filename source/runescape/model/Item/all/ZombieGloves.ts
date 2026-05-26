import { Item } from "../Item";

const ZombieGlovesData = {
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
    id: 7595,
    name: "Zombie gloves"
  }
export const ZombieGloves = Item.fromJson(ZombieGlovesData);
