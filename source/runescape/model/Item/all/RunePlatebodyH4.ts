import { Item } from '../Item';

const runePlatebodyH4Data = {
  id: 23218,
  name: "Rune platebody (h4)",
  iconUrl: '/assets/items/23218.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_platebody_(h4)',
};

export const RunePlatebodyH4 = Item.fromJson(runePlatebodyH4Data);
