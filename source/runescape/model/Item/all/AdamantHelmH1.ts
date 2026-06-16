import { Item } from '../Item';

const adamantHelmH1Data = {
  id: 10296,
  name: "Adamant helm (h1)",
  iconUrl: '/assets/items/10296.png',
  examine: "An adamant helmet with a heraldic design.",
  value: 3520,
  highAlch: 2112,
  lowAlch: 1408,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_helm_(h1)',
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

export const AdamantHelmH1 = Item.fromJson(adamantHelmH1Data);
