import { Item, ItemJson } from '../Item';

const ivandisFlailData: ItemJson = {
  attackCrush: 44,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: -4,
  attackStab: 38,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  defenceSlash: 3,
  defenceStab: 0,
  destroy: 'You can obtain another one by talking to Veliaf Hurtz.',
  equipable: true,
  examine: 'A modified silver sickle effective against vampyres.',
  highAlch: 42000,
  id: 22398,
  lowAlch: 28000,
  members: true,
  meleeStrength: 42,
  name: 'Ivandis flail',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ivandis_flail',
  prayer: 3,
  questItem: false,
  releaseDate: '24 May 2018',
  stackable: false,
  tradeable: false,
  value: 70000,
  weight: 2.721,
};

export const IvandisFlail = Item.fromJson(ivandisFlailData);
