import { Item } from '../Item';

const gildedBootsData = {
  id: 12391,
  name: "Gilded boots",
  iconUrl: "/assets/items/gilded-boots.png",
  examine: "Rune boots with gold plate.",
  value: 12500,
  highAlch: 7500,
  lowAlch: 5000,
  weight: 1.36,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_boots",
};

export const GildedBoots = Item.fromJson(gildedBootsData);
