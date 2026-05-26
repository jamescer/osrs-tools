import { Item } from "../Item";

const SteelCannonballData = {
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
    id: 2,
    name: "Steel cannonball"
  }
export const SteelCannonball = Item.fromJson(SteelCannonballData);
