import { Item } from '../Item';

const silverSickleData = {
  id: 2961,
  name: 'Silver sickle (b)',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 400,
  examine: 'A blessed silver sickle.',
  equipable: true,
  weight: 0.453,
  questItem: false,
  // Combat stats
  attackStab: 4,
  attackSlash: 6,
  attackCrush: -2,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 1,
  defenceCrush: 0,
  defenceMagic: 1,
  defenceRanged: 0,
  strengthBonus: 5,
  prayerBonus: 2,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Silver_sickle_(b)',
};

export const SilverSickleB = Item.fromJson(silverSickleData);
