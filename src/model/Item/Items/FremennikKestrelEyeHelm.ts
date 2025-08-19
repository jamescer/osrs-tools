import { Item } from '../Item';

const fremSteedsHelmData = {
  id: 23981,
  name: 'Fremennik kestrel-eye helm',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 2000,
  examine: 'A helm of a Fremennik ranger.',
  equipable: true,
  weight: 2.267,
  questItem: false,
  // Combat stats
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: -3,
  attackRanged: 8,
  defenceStab: 30,
  defenceSlash: 32,
  defenceCrush: 28,
  defenceMagic: -1,
  defenceRanged: 34,
  strengthBonus: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayerBonus: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Fremennik_kestrel-eye_helm',
};

export const FremennikKestrelEyeHelm = Item.fromJson(fremSteedsHelmData);
