import { Item } from '../Item';

const enchantedTopData = {
  id: 7399,
  name: "Enchanted top",
  iconUrl: "/assets/items/enchanted-top.png",
  examine: "Enchanted Wizards robes.",
  value: 120000,
  highAlch: 72000,
  lowAlch: 48000,
  weight: 2.721,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-02-20",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Enchanted_top",
};

export const EnchantedTop = Item.fromJson(enchantedTopData);
