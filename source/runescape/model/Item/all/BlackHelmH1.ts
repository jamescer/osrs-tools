import { Item } from '../Item';

const blackHelmH1Data = {
  id: 10306,
  name: "Black helm (h1)",
  iconUrl: '/assets/items/10306.png',
  examine: "A black helmet with a heraldic design.",
  value: 1056,
  highAlch: 633,
  lowAlch: 422,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_helm_(h1)',
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
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const BlackHelmH1 = Item.fromJson(blackHelmH1Data);
