import { Item, ItemJson } from '../Item';

const ringOfDuelingData: ItemJson = {
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  defenceSlash: 0,
  defenceStab: 0,
  destroy: 'Drop',
  equipable: true,
  examine: 'A ring for dueling with 8 charges.',
  highAlch: 525,
  id: 2552,
  lowAlch: 350,
  members: true,
  meleeStrength: 0,
  name: 'Ring of dueling(8)',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ring_of_dueling',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2003',
  stackable: false,
  tradeable: true,
  value: 875,
  weight: 0.006,
};

export const RingOfDueling = Item.fromJson(ringOfDuelingData);
