import { Item, ItemJson } from '../Item';

const fremKestrelEyeHelmData: ItemJson = {
  attackCrush: 0,
  attackMagic: -3,
  attackRanged: 8,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 28,
  defenceMagic: -1,
  defenceRanged: 34,
  defenceSlash: 32,
  defenceStab: 30,
  destroy: 'Drop',
  equipable: true,
  examine: 'A helm of a Fremennik ranger.',
  highAlch: 1200,
  id: 23981,
  lowAlch: 800,
  members: true,
  meleeStrength: 0,
  name: 'Fremennik kestrel-eye helm',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Fremennik_kestrel-eye_helm',
  prayer: 0,
  questItem: false,
  releaseDate: '7 January 2021',
  stackable: false,
  tradeable: false,
  value: 2000,
  weight: 2.267,
};

export const FremennikKestrelEyeHelm = Item.fromJson(fremKestrelEyeHelmData);
