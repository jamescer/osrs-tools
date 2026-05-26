import { Item } from "../Item";

const ZombieHelmetData = {
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
    id: 30321,
    name: "Zombie helmet"
  }
export const ZombieHelmet = Item.fromJson(ZombieHelmetData);
