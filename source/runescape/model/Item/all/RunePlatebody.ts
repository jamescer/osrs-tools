import { Item } from '../Item';

const runePlatebodyData = {
  id: 1735,
  name: 'Rune platebody',
  iconUrl: '/assets/items/rune-platebody.png',
  examine: 'A suit of rune body armour.',
  value: 38850,
  highAlch: 23310,
  lowAlch: 15540,
  weight: 29.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_platebody',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -6,
  attackRanged: -4,
  attackMagic: -40,
  defenceStab: 60,
  defenceSlash: 60,
  defenceCrush: 55,
  defenceRanged: 8,
  defenceMagic: 10,
  prayer: 0,
};

export const RunePlatebody = Item.fromJson(runePlatebodyData);
