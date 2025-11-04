import { Item } from '../Item';

const dramenStaffData = {
  equipable: true,
  examine: 'A magical staff made from a Dramen branch.',
  id: 772,
  members: true,
  // Combat stats
attackStab: 2,
  
name: 'Dramen staff',

  noted: false,

  attackCrush: 3,

  questItem: true,

  attackMagic: 4,

  stackable: false,

  attackRanged: 0,

  attackSlash: -1,
  tradeable: false,
  defenceCrush: 1,
  defenceMagic: 4,
  value: 120,
  defenceRanged: 0,
  weight: 1.36,
  defenceSlash: 2,
  defenceStab: 2,
  destroy: 'You can cut another branch from the Dramen tree in Entrana.',
  magicDamage: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dramen_staff',
  strengthBonus: 3,
};

export const DramenStaff = Item.fromJson(dramenStaffData);
