import { Item } from '../Item';

const blisterWoodFlailData = {
  id: 24699,
  name: 'Blisterwood flail',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 70000,
  examine: 'A flail made from Blisterwood, effective against higher-level vampyres.',
  equipable: true,
  weight: 2.721,
  questItem: false,
  // Combat stats
  attackStab: 55,
  attackSlash: -4,
  attackCrush: 68,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 3,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  strengthBonus: 66,
  prayerBonus: 3,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blisterwood_flail',
};

export const BlisterwoodFlail = Item.fromJson(blisterWoodFlailData);
