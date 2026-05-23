import { Item } from '../Item';

const runePlatebodyH3Data = {
  id: 23215,
  name: "Rune platebody (h3)",
  iconUrl: '/assets/items/23215.png',
  examine: "Provides excellent protection with a heraldic design.",
  value: 65000,
  highAlch: 39000,
  lowAlch: 26000,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_platebody_(h3)',
};

export const RunePlatebodyH3 = Item.fromJson(runePlatebodyH3Data);
