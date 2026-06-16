import { Item } from '../Item';

const runePlatebodyH2Data = {
  id: 23212,
  name: "Rune platebody (h2)",
  iconUrl: '/assets/items/23212.png',
  examine: "Provides excellent protection with a heraldic design.",
  value: 65000,
  highAlch: 39000,
  lowAlch: 26000,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_platebody_(h2)',
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

export const RunePlatebodyH2 = Item.fromJson(runePlatebodyH2Data);
