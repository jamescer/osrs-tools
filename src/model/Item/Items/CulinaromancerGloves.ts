import { Item } from '../Item';

const culinaromancerGlovesData = {
  equipable: true,
  examine: 'These gloves were earned by completing Recipe for Disaster.',
  id: 7462,
  members: true,
  attackSlash: 8,
  name: "Culinaromancer's gloves 10",
  attackCrush: 8,
  noted: false,
  attackMagic: 6,
  questItem: false,
  attackRanged: 8,

  stackable: false,

  // Combat stats
attackStab: 8,

  
  tradeable: false,

  defenceCrush: 8,

  value: 100000,
  defenceMagic: 6,
  defenceRanged: 8,
  weight: 0.34,
  defenceSlash: 8,
  defenceStab: 8,
  magicDamage: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Culinaromancer%27s_gloves_10',
  prayerBonus: 0,
  rangedStrength: 8,
  strengthBonus: 8,
};

export const CulinaromancerGloves = Item.fromJson(culinaromancerGlovesData);
