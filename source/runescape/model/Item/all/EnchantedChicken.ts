import { Item } from "../Item";

const EnchantedChickenData = {
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
    id: 525,
    name: "Enchanted chicken"
  }
export const EnchantedChicken = Item.fromJson(EnchantedChickenData);
