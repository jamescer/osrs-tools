import { Item } from '../Item';

const runePlatebodyGData = {
  id: 2615,
  name: "Rune platebody (g)",
  iconUrl: '/assets/items/2615.png',
  examine: "Rune platebody with gold trim.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_platebody_(g)',
};

export const RunePlatebodyG = Item.fromJson(runePlatebodyGData);
