import { Item } from '../Item';

const gildedCoifData = {
  id: 23258,
  name: "Gilded coif",
  iconUrl: "/assets/items/gilded-coif.png",
  examine: "Made with 100% golden dragonhide.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.9,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_coif",
};

export const GildedCoif = Item.fromJson(gildedCoifData);
