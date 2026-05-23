import { Item } from '../Item';

const runePlatebodyH1Data = {
  id: 23209,
  name: "Rune platebody (h1)",
  iconUrl: '/assets/items/23209.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_platebody_(h1)',
};

export const RunePlatebodyH1 = Item.fromJson(runePlatebodyH1Data);
