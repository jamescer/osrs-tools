import { Item } from '../Item';

const mythicalCapeData = {
  equipable: true,
  examine: 'A cape awarded for completing Dragon Slayer II.',
  id: 21295,
  members: true,
  attackSlash: 1,
  name: 'Mythical cape',
  attackCrush: 1,
  noted: false,
  attackMagic: 3,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats
attackStab: 1,

  
  tradeable: false,

  defenceCrush: 3,

  value: 50000,
  defenceMagic: 3,
  defenceRanged: 3,
  weight: 0.453,
  defenceSlash: 3,
  defenceStab: 3,
  magicDamage: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mythical_cape',
  prayerBonus: 1,
  strengthBonus: 1,
};

export const MythicalCape = Item.fromJson(mythicalCapeData);
