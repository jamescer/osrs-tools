import { Item } from "../Item";

const EnchantedBeefData = {
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
    id: 522,
    name: "Enchanted beef"
  }
export const EnchantedBeef = Item.fromJson(EnchantedBeefData);
