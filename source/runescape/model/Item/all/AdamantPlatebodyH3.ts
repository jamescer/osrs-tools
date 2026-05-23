import { Item } from '../Item';

const adamantPlatebodyH3Data = {
  id: 23398,
  name: "Adamant platebody (h3)",
  iconUrl: '/assets/items/23398.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_platebody_(h3)',
};

export const AdamantPlatebodyH3 = Item.fromJson(adamantPlatebodyH3Data);
