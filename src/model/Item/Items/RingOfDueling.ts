import { Item } from '../Item';

const ringOfDuelingData = {
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: 0,
  // Combat stats - no combat bonuses for ring of dueling
  attackStab: 0,

  defenceCrush: 0,

  defenceMagic: 0,

  defenceRanged: 0,

  defenceSlash: 0,

  defenceStab: 0,

  equipable: true,

  examine: 'A ring for dueling with 8 charges.',

  id: 2552,

  members: true,

  name: 'Ring of dueling(8)',

  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ring_of_dueling',
  questItem: false,
  stackable: false,
  tradeable: true,
  value: 875,
  weight: 0.006,
};

export const RingOfDueling = Item.fromJson(ringOfDuelingData);
