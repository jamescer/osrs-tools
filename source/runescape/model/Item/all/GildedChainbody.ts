import { Item } from '../Item';

const gildedChainbodyData = {
  id: 20149,
  name: "Gilded chainbody",
  iconUrl: "/assets/items/gilded-chainbody.png",
  examine: "A series of connected metal rings plated in gold.",
  value: 50000,
  highAlch: 30000,
  lowAlch: 20000,
  weight: 6.803,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_chainbody",
};

export const GildedChainbody = Item.fromJson(gildedChainbodyData);
