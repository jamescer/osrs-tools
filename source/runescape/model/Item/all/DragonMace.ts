import { Item } from '../Item';

const dragonMaceData = {
  id: 1434,
  name: "Dragon mace",
  iconUrl: "/assets/items/dragon-mace.png",
  examine: "A spiky mace.",
  value: 50000,
  highAlch: 30000,
  lowAlch: 20000,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2004-03-29",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_mace",
};

export const DragonMace = Item.fromJson(dragonMaceData);
