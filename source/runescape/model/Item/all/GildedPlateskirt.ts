import { Item } from '../Item';

const gildedPlateskirtData = {
  id: 3485,
  name: "Gilded plateskirt",
  iconUrl: '/assets/items/3485.png',
  examine: "Rune plateskirt with gold plate.",
  value: 64000,
  highAlch: 38400,
  lowAlch: 25600,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Gilded_plateskirt',
};

export const GildedPlateskirt = Item.fromJson(gildedPlateskirtData);
