import { Item, ItemJson } from '../Item';

const dramenStaffData: ItemJson = {
  attackCrush: 3,
  attackMagic: 4,
  attackRanged: 0,
  attackSlash: -1,
  attackStab: 2,
  defenceCrush: 1,
  defenceMagic: 4,
  defenceRanged: 0,
  defenceSlash: 2,
  defenceStab: 2,
  destroy: 'You can cut another branch from the Dramen tree in Entrana.',
  equipable: true,
  examine: 'A magical staff made from a Dramen branch.',
  highAlch: 48,
  lowAlch: 32,
  id: 772,
  magicDamage: 0,
  members: true,
  name: 'Dramen staff',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dramen_staff',
  questItem: true,
  releaseDate: '27 February 2002',
  stackable: false,
  meleeStrength: 3,
  tradeable: false,
  value: 120,
  weight: 1.36,
};

export const DramenStaff = Item.fromJson(dramenStaffData);
