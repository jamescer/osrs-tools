import { Item } from '../Item';

const ghostspeakAmuletData = {
  attackCrush: 0,

  attackMagic: 0,

  attackRanged: 0,

  attackSlash: 0,

  attackStab: 0,

  defenceCrush: 0,

  defenceMagic: 0,

  defenceRanged: 0,

  defenceSlash: 0,

  // Equipment bonuses
  defenceStab: 0,

  destroy: 'You can get another from Father Urhney in the Lumbridge Swamp.',

  equipable: true,

  examine: 'A magical amulet that allows the wearer to talk to ghosts.',

  id: 552,
  members: true,
  name: 'Ghostspeak amulet',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ghostspeak_amulet',
  prayerBonus: 0,
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.01,
};

export const GhostspeakAmulet = Item.fromJson(ghostspeakAmuletData);
