import { Item } from "../Item";

const GiantEasterEggData = {
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
    id: 23446,
    name: "Giant easter egg"
  }
export const GiantEasterEgg = Item.fromJson(GiantEasterEggData);
