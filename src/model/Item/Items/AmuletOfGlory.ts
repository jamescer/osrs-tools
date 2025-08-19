import { Item } from '../Item';

const amuletOfGloryData = {
  id: 1704,
  name: 'Amulet of glory',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 12000,
  examine: 'A dragonstone amulet with four charges.',
  equipable: true,
  weight: 0.01,
  questItem: false,
  // Combat stats
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 10,
  attackRanged: 10,
  defenceStab: 3,
  defenceSlash: 3,
  defenceCrush: 3,
  defenceMagic: 3,
  defenceRanged: 3,
  strengthBonus: 6,
  prayerBonus: 3,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Amulet_of_glory',
};

export const AmuletOfGlory = Item.fromJson(amuletOfGloryData);
