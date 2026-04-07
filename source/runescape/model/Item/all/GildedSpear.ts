import { Item } from '../Item';

const gildedSpearData = {
  id: 20158,
  name: "Gilded spear",
  iconUrl: "/assets/items/gilded-spear.png",
  examine: "A rune tipped spear with gold plate.",
  value: 20800,
  highAlch: 12480,
  lowAlch: 8320,
  weight: 2.267,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_spear",
};

export const GildedSpear = Item.fromJson(gildedSpearData);
