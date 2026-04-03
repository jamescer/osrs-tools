import { Item } from '../Item';

const ironPlatesData = {
  id: 1593,
  name: 'Iron platelegs',
  iconUrl: '/assets/items/iron-platelegs.png',
  examine: 'A suit of iron leg armour.',
  value: 62,
  highAlch: 37,
  lowAlch: 24,
  weight: 6.5,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iron_platelegs',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -1,
  attackRanged: 0,
  attackMagic: -5,
  defenceStab: 14,
  defenceSlash: 14,
  defenceCrush: 12,
  defenceRanged: 2,
  defenceMagic: 2,
  prayer: 0,
};

export const IronPlatelegs = Item.fromJson(ironPlatesData);
