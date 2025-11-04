import { Item } from '../Item';

const ringOfDuelingData = {
  equipable: true,
  examine: 'A ring for dueling with 8 charges.',
  id: 2552,
  members: true,
  attackSlash: 0,
  name: 'Ring of dueling(8)',
  attackCrush: 0,
  noted: false,
  attackMagic: 0,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats - no combat bonuses for ring of dueling
attackStab: 0,

  
  tradeable: true,

  defenceCrush: 0,

  value: 875,
  defenceMagic: 0,
  defenceRanged: 0,
  weight: 0.006,
  defenceSlash: 0,
  defenceStab: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ring_of_dueling',
};

export const RingOfDueling = Item.fromJson(ringOfDuelingData);
