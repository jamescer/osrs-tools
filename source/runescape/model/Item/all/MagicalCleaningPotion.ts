import { Item } from "../Item";

const MagicalCleaningPotionData = {
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
    id: 26278,
    name: "Magical cleaning potion"
  }
export const MagicalCleaningPotion = Item.fromJson(MagicalCleaningPotionData);
