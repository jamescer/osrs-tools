import { Item } from '../Item';

const amuletOfGloryData = {
  equipable: true,
  examine: 'A dragonstone amulet with four charges.',
  id: 1704,
  members: true,
  attackSlash: 0,
  name: 'Amulet of glory',
  attackCrush: 0,
  noted: false,
  attackMagic: 10,
  questItem: false,
  attackRanged: 10,

  stackable: false,

  // Combat stats
attackStab: 0,

  
  tradeable: true,

  defenceCrush: 3,

  value: 12000,
  defenceMagic: 3,
  defenceRanged: 3,
  weight: 0.01,
  defenceSlash: 3,
  defenceStab: 3,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Amulet_of_glory',
  prayerBonus: 3,
  strengthBonus: 6,
};

export const AmuletOfGlory = Item.fromJson(amuletOfGloryData);
