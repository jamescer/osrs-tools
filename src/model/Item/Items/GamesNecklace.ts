import { Item } from '../Item';

const gamesNecklaceData = {
  id: 3853,
  name: 'Games necklace(8)',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 900,
  examine: 'A necklace that helps you play games with 8 charges.',
  equipable: true,
  weight: 0.006,
  questItem: false,
  // Combat stats - no combat bonuses for games necklace
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Games_necklace',
};

export const GamesNecklace = Item.fromJson(gamesNecklaceData);
