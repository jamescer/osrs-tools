import { Item } from '../Item';

const blisterWoodFlailData = {
  equipable: true,
  examine: 'A flail made from Blisterwood, effective against higher-level vampyres.',
  id: 24699,
  members: true,
  attackSlash: -4,
  name: 'Blisterwood flail',
  attackCrush: 68,
  noted: false,
  attackMagic: 0,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats
attackStab: 55,

  
  tradeable: false,

  defenceCrush: 0,

  value: 70000,
  defenceMagic: 0,
  defenceRanged: 0,
  weight: 2.721,
  defenceSlash: 3,
  defenceStab: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blisterwood_flail',
  prayerBonus: 3,
  strengthBonus: 66,
};

export const BlisterwoodFlail = Item.fromJson(blisterWoodFlailData);
