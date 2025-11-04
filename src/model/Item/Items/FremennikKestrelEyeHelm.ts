import { Item } from '../Item';

const fremSteedsHelmData = {
  equipable: true,
  examine: 'A helm of a Fremennik ranger.',
  id: 23981,
  members: true,
  attackSlash: 0,
  name: 'Fremennik kestrel-eye helm',
  attackCrush: 0,
  noted: false,
  attackMagic: -3,
  questItem: false,
  attackRanged: 8,

  stackable: false,

  // Combat stats
attackStab: 0,

  
  tradeable: false,

  defenceCrush: 28,

  value: 2000,
  defenceMagic: -1,
  defenceRanged: 34,
  weight: 2.267,
  defenceSlash: 32,
  defenceStab: 30,
  magicDamage: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Fremennik_kestrel-eye_helm',
  prayerBonus: 0,
  rangedStrength: 0,
  strengthBonus: 0,
};

export const FremennikKestrelEyeHelm = Item.fromJson(fremSteedsHelmData);
