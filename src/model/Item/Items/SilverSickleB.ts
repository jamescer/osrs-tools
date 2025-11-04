import { Item } from '../Item';

const silverSickleData = {
  equipable: true,
  examine: 'A blessed silver sickle.',
  id: 2961,
  members: true,
  attackSlash: 6,
  name: 'Silver sickle (b)',
  attackCrush: -2,
  noted: false,
  attackMagic: 0,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats
attackStab: 4,

  
  tradeable: false,

  defenceCrush: 0,

  value: 400,
  defenceMagic: 1,
  defenceRanged: 0,
  weight: 0.453,
  defenceSlash: 1,
  defenceStab: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Silver_sickle_(b)',
  prayerBonus: 2,
  strengthBonus: 5,
};

export const SilverSickleB = Item.fromJson(silverSickleData);
