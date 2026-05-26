import { Item } from "../Item";

const SteelSwordData = {
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
    id: 1281,
    name: "Steel sword"
  }
export const SteelSword = Item.fromJson(SteelSwordData);
