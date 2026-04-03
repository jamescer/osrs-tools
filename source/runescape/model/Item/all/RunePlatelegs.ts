import { Item } from '../Item';

const runePlatesData = {
  id: 1737,
  name: 'Rune platelegs',
  iconUrl: '/assets/items/rune-platelegs.png',
  examine: 'A suit of rune leg armour.',
  value: 23250,
  highAlch: 13950,
  lowAlch: 9300,
  weight: 17.75,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_platelegs',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -3,
  attackRanged: -2,
  attackMagic: -20,
  defenceStab: 42,
  defenceSlash: 42,
  defenceCrush: 38,
  defenceRanged: 6,
  defenceMagic: 6,
  prayer: 0,
};

export const RunePlatelegs = Item.fromJson(runePlatesData);
