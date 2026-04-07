import { Item } from '../Item';

const gildedDHideChapsData = {
  id: 23267,
  name: "Gilded d'hide chaps",
  iconUrl: "/assets/items/gilded-dhide-chaps.png",
  examine: "Made with 100% golden dragonhide.",
  value: 40000,
  highAlch: 24000,
  lowAlch: 16000,
  weight: 5,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_d'hide_chaps",
};

export const GildedDHideChaps = Item.fromJson(gildedDHideChapsData);
