import { Item } from "../Item";

const EnchantedBearData = {
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
    id: 524,
    name: "Enchanted bear"
  }
export const EnchantedBear = Item.fromJson(EnchantedBearData);
