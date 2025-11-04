import { Item } from '../Item';

const gamesNecklaceData = {
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: 0,
  // Combat stats - no combat bonuses for games necklace
  attackStab: 0,

  defenceCrush: 0,

  defenceMagic: 0,

  defenceRanged: 0,

  defenceSlash: 0,

  defenceStab: 0,

  equipable: true,

  examine: 'A necklace that helps you play games with 8 charges.',

  id: 3853,

  members: true,

  name: 'Games necklace(8)',

  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Games_necklace',
  questItem: false,
  stackable: false,
  tradeable: true,
  value: 900,
  weight: 0.006,
};

export const GamesNecklace = Item.fromJson(gamesNecklaceData);
