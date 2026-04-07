import { Item } from '../Item';

const gildedKiteshieldData = {
  id: 3488,
  name: "Gilded kiteshield",
  iconUrl: "/assets/items/gilded-kiteshield.png",
  examine: "Rune kiteshield with gold plate.",
  value: 54400,
  highAlch: 32640,
  lowAlch: 21760,
  weight: 5.443,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2004-10-26",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_kiteshield",
};

export const GildedKiteshield = Item.fromJson(gildedKiteshieldData);
