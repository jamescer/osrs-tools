import { Item } from '../Item';

const silverSickleData = {
  attackCrush: -2,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: 6,
  // Combat stats
  attackStab: 4,

  defenceCrush: 0,

  defenceMagic: 1,

  defenceRanged: 0,

  defenceSlash: 1,

  defenceStab: 0,

  equipable: true,

  examine: 'A blessed silver sickle.',

  id: 2961,

  members: true,

  name: 'Silver sickle (b)',

  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Silver_sickle_(b)',
  prayerBonus: 2,
  questItem: false,
  stackable: false,
  strengthBonus: 5,
  tradeable: false,
  value: 400,
  weight: 0.453,
};

export const SilverSickleB = Item.fromJson(silverSickleData);
