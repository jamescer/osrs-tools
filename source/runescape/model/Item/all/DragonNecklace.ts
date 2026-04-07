import { Item } from '../Item';

const dragonNecklaceData = {
  id: 1664,
  name: "Dragon necklace",
  iconUrl: "/assets/items/dragon-necklace.png",
  examine: "I wonder if this is valuable.",
  value: 18375,
  highAlch: 11025,
  lowAlch: 7350,
  weight: 0.01,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2002-02-27",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_necklace",
};

export const DragonNecklace = Item.fromJson(dragonNecklaceData);
