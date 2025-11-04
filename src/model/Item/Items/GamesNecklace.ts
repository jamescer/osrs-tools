import { Item } from '../Item';

const gamesNecklaceData = {
  equipable: true,
  examine: 'A necklace that helps you play games with 8 charges.',
  id: 3853,
  members: true,
  attackSlash: 0,
  name: 'Games necklace(8)',
  attackCrush: 0,
  noted: false,
  attackMagic: 0,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats - no combat bonuses for games necklace
attackStab: 0,

  
  tradeable: true,

  defenceCrush: 0,

  value: 900,
  defenceMagic: 0,
  defenceRanged: 0,
  weight: 0.006,
  defenceSlash: 0,
  defenceStab: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Games_necklace',
};

export const GamesNecklace = Item.fromJson(gamesNecklaceData);
