import { Item } from '../Item';

const blisterWoodFlailData = {
  attackCrush: 68,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: -4,
  // Combat stats
  attackStab: 55,

  defenceCrush: 0,

  defenceMagic: 0,

  defenceRanged: 0,

  defenceSlash: 3,

  defenceStab: 0,

  equipable: true,

  examine: 'A flail made from Blisterwood, effective against higher-level vampyres.',

  id: 24699,

  members: true,

  name: 'Blisterwood flail',

  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blisterwood_flail',
  prayerBonus: 3,
  questItem: false,
  stackable: false,
  strengthBonus: 66,
  tradeable: false,
  value: 70000,
  weight: 2.721,
};

export const BlisterwoodFlail = Item.fromJson(blisterWoodFlailData);
