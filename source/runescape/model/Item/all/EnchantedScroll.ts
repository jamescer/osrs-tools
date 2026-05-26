import { Item } from "../Item";

const EnchantedScrollData = {
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
    id: 21259,
    name: "Enchanted scroll"
  }
export const EnchantedScroll = Item.fromJson(EnchantedScrollData);
