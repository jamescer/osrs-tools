import { Item } from '../Item';

const mythicalCapeData = {
  id: 21295,
  name: 'Mythical cape',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 50000,
  examine: 'A cape awarded for completing Dragon Slayer II.',
  equipable: true,
  weight: 0.453,
  questItem: false,
  // Combat stats
  attackStab: 1,
  attackSlash: 1,
  attackCrush: 1,
  attackMagic: 3,
  attackRanged: 0,
  defenceStab: 3,
  defenceSlash: 3,
  defenceCrush: 3,
  defenceMagic: 3,
  defenceRanged: 3,
  strengthBonus: 1,
  magicDamage: 0,
  prayerBonus: 1,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mythical_cape',
};

export const MythicalCape = Item.fromJson(mythicalCapeData);
