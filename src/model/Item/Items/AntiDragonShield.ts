import { Item } from '../Item';

const antidragonShieldData = {
  attackCrush: 0,
  attackMagic: -3,
  attackRanged: -3,
  attackSlash: 0,
  // Combat stats
  attackStab: 0,

  defenceCrush: 22,

  defenceMagic: 0,

  defenceRanged: 22,

  defenceSlash: 25,

  defenceStab: 20,

  equipable: true,

  examine: 'A shield that can deflect dragon breath.',

  id: 1540,

  members: false,

  name: 'Anti-dragon shield',

  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Anti-dragon_shield',
  questItem: false,
  stackable: false,
  strengthBonus: 0,
  tradeable: true,
  value: 100,
  weight: 2.267,
};

export const AntiDragonShield = Item.fromJson(antidragonShieldData);
