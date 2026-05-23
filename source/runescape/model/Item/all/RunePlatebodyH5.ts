import { Item } from '../Item';

const runePlatebodyH5Data = {
  id: 23221,
  name: "Rune platebody (h5)",
  iconUrl: '/assets/items/23221.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_platebody_(h5)',
};

export const RunePlatebodyH5 = Item.fromJson(runePlatebodyH5Data);
