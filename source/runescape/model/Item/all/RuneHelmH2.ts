import { Item } from '../Item';

const runeHelmH2Data = {
  id: 10288,
  name: "Rune helm (h2)",
  iconUrl: '/assets/items/10288.png',
  examine: "A rune helmet with a heraldic design.",
  value: 35200,
  highAlch: 21120,
  lowAlch: 14080,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_helm_(h2)',
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

export const RuneHelmH2 = Item.fromJson(runeHelmH2Data);
