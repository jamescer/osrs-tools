import { Item } from '../Item';

const antidragonShieldData = {
  equipable: true,
  examine: 'A shield that can deflect dragon breath.',
  id: 1540,
  members: false,
  attackSlash: 0,
  name: 'Anti-dragon shield',
  attackCrush: 0,
  noted: false,
  attackMagic: -3,
  questItem: false,
  attackRanged: -3,

  stackable: false,

  // Combat stats
attackStab: 0,

  
  tradeable: true,

  defenceCrush: 22,

  value: 100,
  defenceMagic: 0,
  defenceRanged: 22,
  weight: 2.267,
  defenceSlash: 25,
  defenceStab: 20,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Anti-dragon_shield',
  strengthBonus: 0,
};

export const AntiDragonShield = Item.fromJson(antidragonShieldData);
