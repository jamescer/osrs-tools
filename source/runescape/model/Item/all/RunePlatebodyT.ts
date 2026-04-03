import { Item } from '../Item';

const runePlatebodyTData = {
  id: 3493,
  name: 'Rune platebody (t)',
  iconUrl: '/assets/items/rune-platebody-t.png',
  examine: 'A suit of rune body armour, decorated with gold trim.',
  value: 88200,
  highAlch: 52920,
  lowAlch: 35280,
  weight: 29.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_platebody_(t)',
  defenceStab: 60,
  defenceSlash: 60,
  defenceCrush: 55,
  defenceRanged: 8,
  defenceMagic: 10,
  prayer: 8,
};

export const RunePlatebodyT = Item.fromJson(runePlatebodyTData);
