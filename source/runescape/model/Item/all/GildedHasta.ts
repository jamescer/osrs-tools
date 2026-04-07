import { Item } from '../Item';

const gildedHastaData = {
  id: 20161,
  name: "Gilded hasta",
  iconUrl: "/assets/items/gilded-hasta.png",
  examine: "A rune-tipped, one-handed hasta, with gold plate.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_hasta",
};

export const GildedHasta = Item.fromJson(gildedHastaData);
