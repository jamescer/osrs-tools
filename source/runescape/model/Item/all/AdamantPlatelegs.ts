import { Item } from '../Item';

const adamantPlatesData = {
  id: 1609,
  name: 'Adamant platelegs',
  iconUrl: '/assets/items/adamant-platelegs.png',
  examine: 'A suit of adamant leg armour.',
  value: 1100,
  highAlch: 660,
  lowAlch: 440,
  weight: 14.75,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_platelegs',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -3,
  attackRanged: -1,
  attackMagic: -15,
  defenceStab: 34,
  defenceSlash: 34,
  defenceCrush: 30,
  defenceRanged: 5,
  defenceMagic: 5,
  prayer: 0,
};

export const AdamantPlatelegs = Item.fromJson(adamantPlatesData);
