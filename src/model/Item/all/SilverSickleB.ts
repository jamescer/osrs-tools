import { Item, ItemJson } from '../Item';

const silverSickleData: ItemJson = {
  attackCrush: -2,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: 6,
  attackStab: 4,
  defenceCrush: 0,
  defenceMagic: 1,
  defenceRanged: 0,
  defenceSlash: 1,
  defenceStab: 0,
  destroy: 'Drop',
  equipable: true,
  examine: 'A blessed silver sickle.',
  highAlch: 240,
  id: 2961,
  lowAlch: 160,
  members: true,
  meleeStrength: 5,
  name: 'Silver sickle (b)',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Silver_sickle_(b)',
  prayer: 2,
  questItem: false,
  releaseDate: '27 February 2002',
  stackable: false,
  tradeable: false,
  value: 400,
  weight: 0.453,
};

export const SilverSickleB = Item.fromJson(silverSickleData);
