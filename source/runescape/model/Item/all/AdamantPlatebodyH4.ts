import { Item } from '../Item';

const adamantPlatebodyH4Data = {
  id: 23401,
  name: "Adamant platebody (h4)",
  iconUrl: '/assets/items/23401.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_platebody_(h4)',
};

export const AdamantPlatebodyH4 = Item.fromJson(adamantPlatebodyH4Data);
