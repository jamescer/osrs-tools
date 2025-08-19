import { Item } from '../Item';

const antidragonShieldData = {
  id: 1540,
  name: 'Anti-dragon shield',
  members: false,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 100,
  examine: 'A shield that can deflect dragon breath.',
  equipable: true,
  weight: 2.267,
  questItem: false,
  // Combat stats
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: -3,
  attackRanged: -3,
  defenceStab: 20,
  defenceSlash: 25,
  defenceCrush: 22,
  defenceMagic: 0,
  defenceRanged: 22,
  strengthBonus: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Anti-dragon_shield',
};

export const AntiDragonShield = Item.fromJson(antidragonShieldData);
