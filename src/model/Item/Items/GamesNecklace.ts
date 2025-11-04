import { Item, ItemJson } from '../Item';

const gamesNecklaceData: ItemJson = {
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
  destroy: 'Drop',
  equipable: true,
  examine: 'A necklace that helps you play games with 8 charges.',
  highAlch: 540,
  id: 3853,
  lowAlch: 360,
  members: true,
  meleeStrength: 0,
  name: 'Games necklace(8)',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Games_necklace',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2003',
  stackable: false,
  tradeable: true,
  value: 900,
  weight: 0.006,
};

export const GamesNecklace = Item.fromJson(gamesNecklaceData);
