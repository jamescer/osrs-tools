import { Item } from "../Item";

const PotionApothecaryData = {
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
    id: 195,
    name: "Potion (Apothecary)"
  }
export const PotionApothecary = Item.fromJson(PotionApothecaryData);
