import { Item } from '../Item';

const adamantPlatebodyH2Data = {
  id: 23395,
  name: "Adamant platebody (h2)",
  iconUrl: '/assets/items/23395.png',
  examine: "Adamant platebody with a heraldic design.",
  value: 16640,
  highAlch: 9984,
  lowAlch: 6656,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_platebody_(h2)',
};

export const AdamantPlatebodyH2 = Item.fromJson(adamantPlatebodyH2Data);
