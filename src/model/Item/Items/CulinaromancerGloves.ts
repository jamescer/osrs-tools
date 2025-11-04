import { Item } from '../Item';

const culinaromancerGlovesData = {
  attackCrush: 8,
  attackMagic: 6,
  attackRanged: 8,
  attackSlash: 8,
  // Combat stats
  attackStab: 8,

  defenceCrush: 8,

  defenceMagic: 6,

  defenceRanged: 8,

  defenceSlash: 8,

  defenceStab: 8,

  equipable: true,

  examine: 'These gloves were earned by completing Recipe for Disaster.',

  id: 7462,

  magicDamage: 0,

  members: true,

  name: "Culinaromancer's gloves 10",
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Culinaromancer%27s_gloves_10',
  prayerBonus: 0,
  questItem: false,
  rangedStrength: 8,
  stackable: false,
  strengthBonus: 8,
  tradeable: false,
  value: 100000,
  weight: 0.34,
};

export const CulinaromancerGloves = Item.fromJson(culinaromancerGlovesData);
