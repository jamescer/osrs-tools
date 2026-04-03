import { Item } from '../Item';

const rainBowData = {
  id: 1365,
  name: 'Rain bow',
  iconUrl: '/assets/items/rain-bow.png',
  examine: 'A colourful bow.',
  value: 780,
  highAlch: 468,
  lowAlch: 312,
  weight: 1.3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2003-09-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rain_bow',
  attackStab: -5,
  attackSlash: -5,
  attackCrush: -5,
  attackRanged: 60,
  attackMagic: 0,
  defenceStab: 1,
  defenceSlash: 1,
  defenceCrush: 1,
  defenceRanged: 3,
  defenceMagic: -1,
  rangedStrength: 14,
};

export const RainBow = Item.fromJson(rainBowData);
