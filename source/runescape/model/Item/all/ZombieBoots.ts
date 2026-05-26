import { Item } from "../Item";

const ZombieBootsData = {
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
    id: 7596,
    name: "Zombie boots"
  }
export const ZombieBoots = Item.fromJson(ZombieBootsData);
