import { Item } from '../Item';

const runePlatebodyH2Data = {
  id: 23212,
  name: "Rune platebody (h2)",
  iconUrl: '/assets/items/23212.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_platebody_(h2)',
};

export const RunePlatebodyH2 = Item.fromJson(runePlatebodyH2Data);
