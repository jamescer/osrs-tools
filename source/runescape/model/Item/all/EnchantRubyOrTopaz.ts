import { Item } from "../Item";

const EnchantRubyOrTopazData = {
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
    id: 8018,
    name: "Enchant ruby or topaz"
  }
export const EnchantRubyOrTopaz = Item.fromJson(EnchantRubyOrTopazData);
