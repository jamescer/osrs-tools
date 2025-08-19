import { Item } from '../Item';

const ringOfDuelingData = {
  id: 2552,
  name: 'Ring of dueling(8)',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 875,
  examine: 'A ring for dueling with 8 charges.',
  equipable: true,
  weight: 0.006,
  questItem: false,
  // Combat stats - no combat bonuses for ring of dueling
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ring_of_dueling',
};

export const RingOfDueling = Item.fromJson(ringOfDuelingData);
