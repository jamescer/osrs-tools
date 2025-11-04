import { Item } from '../Item';

const fremSteedsHelmData = {
  attackCrush: 0,
  attackMagic: -3,
  attackRanged: 8,
  attackSlash: 0,
  // Combat stats
  attackStab: 0,

  defenceCrush: 28,

  defenceMagic: -1,

  defenceRanged: 34,

  defenceSlash: 32,

  defenceStab: 30,

  equipable: true,

  examine: 'A helm of a Fremennik ranger.',

  id: 23981,

  magicDamage: 0,

  members: true,

  name: 'Fremennik kestrel-eye helm',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Fremennik_kestrel-eye_helm',
  prayerBonus: 0,
  questItem: false,
  rangedStrength: 0,
  stackable: false,
  strengthBonus: 0,
  tradeable: false,
  value: 2000,
  weight: 2.267,
};

export const FremennikKestrelEyeHelm = Item.fromJson(fremSteedsHelmData);
