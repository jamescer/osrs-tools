import { Item } from '../Item';

const ghostspeakAmuletData = {
  id: 552,
  name: 'Ghostspeak amulet',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 1,
  examine: 'A magical amulet that allows the wearer to talk to ghosts.',
  equipable: true,
  weight: 0.01,
  questItem: true,
  destroy: 'You can get another from Father Urhney in the Lumbridge Swamp.',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ghostspeak_amulet',
  // Equipment bonuses
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  prayerBonus: 0,
};

export const GhostspeakAmulet = Item.fromJson(ghostspeakAmuletData);
