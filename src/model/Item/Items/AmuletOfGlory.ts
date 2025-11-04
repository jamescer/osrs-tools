import { Item } from '../Item';

const amuletOfGloryData = {
  attackCrush: 0,
  attackMagic: 10,
  attackRanged: 10,
  attackSlash: 0,
  // Combat stats
  attackStab: 0,

  defenceCrush: 3,

  defenceMagic: 3,

  defenceRanged: 3,

  defenceSlash: 3,

  defenceStab: 3,

  equipable: true,

  examine: 'A dragonstone amulet with four charges.',

  id: 1704,

  members: true,

  name: 'Amulet of glory',

  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Amulet_of_glory',
  prayerBonus: 3,
  questItem: false,
  stackable: false,
  strengthBonus: 6,
  tradeable: true,
  value: 12000,
  weight: 0.01,
};

export const AmuletOfGlory = Item.fromJson(amuletOfGloryData);
