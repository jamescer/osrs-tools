import { Item, ItemJson } from '../Item';

const gildedPlatebodyData: ItemJson = {
  id: 3829,
  name: 'Gilded platebody',
  iconUrl: '/assets/items/gilded-platebody.png',
  examine: 'Rune platebody with gold plate.',
  value: 39000,
  highAlch: 39000,
  lowAlch: 26000,
  weight: 9.979,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-10-26',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Gilded_platebody',
  attackMagic: -30,
  attackRanged: -15,
  defenceStab: 82,
  defenceSlash: 80,
  defenceCrush: 72,
  defenceMagic: -6,
  defenceRanged: 80,
};

export const GildedPlatebody = Item.fromJson(gildedPlatebodyData);
