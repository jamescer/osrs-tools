import { Item } from '../Item';

const runePickaxeData = {
  id: 1275,
  name: "Rune pickaxe",
  iconUrl: "/assets/items/rune-pickaxe.png",
  examine: "Used for mining.",
  value: 32000,
  highAlch: 19200,
  lowAlch: 12800,
  weight: 2.267,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2003-05-27",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_pickaxe",
};

export const RunePickaxe = Item.fromJson(runePickaxeData);
