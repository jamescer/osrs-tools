import { Item } from '../Item';

const gildedPickaxeData = {
  id: 23276,
  name: "Gilded pickaxe",
  iconUrl: "/assets/items/gilded-pickaxe.png",
  examine: "Used for mining and very stylish.",
  value: 50000,
  highAlch: 30000,
  lowAlch: 20000,
  weight: 2.267,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_pickaxe",
};

export const GildedPickaxe = Item.fromJson(gildedPickaxeData);
