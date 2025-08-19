import { Item } from '../Item';

const culinaromancerGlovesData = {
  id: 7462,
  name: "Culinaromancer's gloves 10",
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 100000,
  examine: 'These gloves were earned by completing Recipe for Disaster.',
  equipable: true,
  weight: 0.34,
  questItem: false,
  // Combat stats
  attackStab: 8,
  attackSlash: 8,
  attackCrush: 8,
  attackMagic: 6,
  attackRanged: 8,
  defenceStab: 8,
  defenceSlash: 8,
  defenceCrush: 8,
  defenceMagic: 6,
  defenceRanged: 8,
  strengthBonus: 8,
  rangedStrength: 8,
  magicDamage: 0,
  prayerBonus: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Culinaromancer%27s_gloves_10',
};

export const CulinaromancerGloves = Item.fromJson(culinaromancerGlovesData);
