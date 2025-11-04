import { Item } from '../Item';

const ghostspeakAmuletData = {
  equipable: true,
  examine: 'A magical amulet that allows the wearer to talk to ghosts.',
  id: 552,
  members: true,
  destroy: 'You can get another from Father Urhney in the Lumbridge Swamp.',
  name: 'Ghostspeak amulet',
  // Equipment bonuses
defenceStab: 0,
  
noted: false,

  questItem: true,

  defenceCrush: 0,

  stackable: false,

  defenceMagic: 0,

  attackStab: 0,

  tradeable: false,
  attackCrush: 0,
  attackMagic: 0,
  value: 1,
  attackRanged: 0,
  attackSlash: 0,
  weight: 0.01,
  defenceRanged: 0,
  defenceSlash: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ghostspeak_amulet',
  prayerBonus: 0,
};

export const GhostspeakAmulet = Item.fromJson(ghostspeakAmuletData);
