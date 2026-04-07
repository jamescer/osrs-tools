import { Item } from '../Item';

const gildedAxeData = {
  id: 23279,
  name: "Gilded axe",
  iconUrl: "/assets/items/gilded-axe.png",
  examine: "A powerful axe.",
  value: 35000,
  highAlch: 21000,
  lowAlch: 14000,
  weight: 1.36,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_axe",
};

export const GildedAxe = Item.fromJson(gildedAxeData);
