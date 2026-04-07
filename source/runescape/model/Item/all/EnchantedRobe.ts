import { Item } from '../Item';

const enchantedRobeData = {
  id: 7398,
  name: "Enchanted robe",
  iconUrl: "/assets/items/enchanted-robe.png",
  examine: "Enchanted Wizards robes.",
  value: 80000,
  highAlch: 48000,
  lowAlch: 32000,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-02-20",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Enchanted_robe",
};

export const EnchantedRobe = Item.fromJson(enchantedRobeData);
