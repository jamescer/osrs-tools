import { Item } from '../Item';

const steelPlatesData = {
  id: 1599,
  name: 'Steel platelegs',
  iconUrl: '/assets/items/steel-platelegs.png',
  examine: 'A suit of steel leg armour.',
  value: 187,
  highAlch: 112,
  lowAlch: 74,
  weight: 9.75,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_platelegs',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -2,
  attackRanged: -1,
  attackMagic: -8,
  defenceStab: 22,
  defenceSlash: 22,
  defenceCrush: 18,
  defenceRanged: 3,
  defenceMagic: 3,
  prayer: 0,
};

export const SteelPlatelegs = Item.fromJson(steelPlatesData);
