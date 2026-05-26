import { Item } from "../Item";

const SlayersEnchantmentData = {
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
    id: 21257,
    name: "Slayer's enchantment"
  }
export const SlayersEnchantment = Item.fromJson(SlayersEnchantmentData);
