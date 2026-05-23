import { Item } from '../Item';

const adamantPlatebodyH5Data = {
  id: 23404,
  name: "Adamant platebody (h5)",
  iconUrl: '/assets/items/23404.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_platebody_(h5)',
};

export const AdamantPlatebodyH5 = Item.fromJson(adamantPlatebodyH5Data);
