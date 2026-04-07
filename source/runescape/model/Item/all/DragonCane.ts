import { Item } from '../Item';

const dragonCaneData = {
  id: 12373,
  name: "Dragon cane",
  iconUrl: "/assets/items/dragon-cane.png",
  examine: "An onyx topped cane.",
  value: 30000,
  highAlch: 18000,
  lowAlch: 12000,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_cane",
};

export const DragonCane = Item.fromJson(dragonCaneData);
