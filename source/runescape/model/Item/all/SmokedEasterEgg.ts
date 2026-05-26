import { Item } from "../Item";

const SmokedEasterEggData = {
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
    id: 21225,
    name: "Smoked easter egg"
  }
export const SmokedEasterEgg = Item.fromJson(SmokedEasterEggData);
