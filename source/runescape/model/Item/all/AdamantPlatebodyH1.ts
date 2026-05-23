import { Item } from '../Item';

const adamantPlatebodyH1Data = {
  id: 23392,
  name: "Adamant platebody (h1)",
  iconUrl: '/assets/items/23392.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_platebody_(h1)',
};

export const AdamantPlatebodyH1 = Item.fromJson(adamantPlatebodyH1Data);
