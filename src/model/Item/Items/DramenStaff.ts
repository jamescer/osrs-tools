import { Item } from '../Item';

const dramenStaffData = {
  id: 772,
  name: 'Dramen staff',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 120,
  examine: 'A magical staff made from a Dramen branch.',
  equipable: true,
  weight: 1.36,
  questItem: true,
  destroy: 'You can cut another branch from the Dramen tree in Entrana.',
  // Combat stats
  attackStab: 2,
  attackSlash: -1,
  attackCrush: 3,
  attackMagic: 4,
  attackRanged: 0,
  defenceStab: 2,
  defenceSlash: 2,
  defenceCrush: 1,
  defenceMagic: 4,
  defenceRanged: 0,
  magicDamage: 0,
  strengthBonus: 3,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dramen_staff',
};

export const DramenStaff = Item.fromJson(dramenStaffData);
