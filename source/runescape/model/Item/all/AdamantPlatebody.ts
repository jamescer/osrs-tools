import { Item } from '../Item';

const adamantPlatebodyData = {
  id: 1607,
  name: 'Adamant platebody',
  iconUrl: '/assets/items/adamant-platebody.png',
  examine: 'A suit of adamant body armour.',
  value: 1835,
  highAlch: 1101,
  lowAlch: 734,
  weight: 24.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_platebody',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -5,
  attackRanged: -3,
  attackMagic: -30,
  defenceStab: 50,
  defenceSlash: 50,
  defenceCrush: 45,
  defenceRanged: 7,
  defenceMagic: 7,
  prayer: 0,
};

export const AdamantPlatebody = Item.fromJson(adamantPlatebodyData);
