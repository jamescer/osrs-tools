import { Item } from '../Item';

const mythicalCapeData = {
  attackCrush: 1,
  attackMagic: 3,
  attackRanged: 0,
  attackSlash: 1,
  // Combat stats
  attackStab: 1,

  defenceCrush: 3,

  defenceMagic: 3,

  defenceRanged: 3,

  defenceSlash: 3,

  defenceStab: 3,

  equipable: true,

  examine: 'A cape awarded for completing Dragon Slayer II.',

  id: 21295,

  magicDamage: 0,

  members: true,

  name: 'Mythical cape',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mythical_cape',
  prayerBonus: 1,
  questItem: false,
  stackable: false,
  strengthBonus: 1,
  tradeable: false,
  value: 50000,
  weight: 0.453,
};

export const MythicalCape = Item.fromJson(mythicalCapeData);
