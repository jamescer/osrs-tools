import { Item, ItemJson } from '../Item';

const ghostspeakAmuletData: ItemJson = {
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
  destroy: 'You can get another from Father Urhney in the Lumbridge Swamp.',
  equipable: true,
  examine: 'A magical amulet that allows the wearer to talk to ghosts.',
  highAlch: 0,
  id: 552,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Ghostspeak amulet',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ghostspeak_amulet',
  prayer: 0,
  questItem: true,
  releaseDate: '27 February 2002',
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.01,
};

export const GhostspeakAmulet = Item.fromJson(ghostspeakAmuletData);
