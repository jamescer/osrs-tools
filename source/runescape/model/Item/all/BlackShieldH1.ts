import { Item } from '../Item';

const blackShieldH1Data = {
  id: 7332,
  name: "Black shield (h1)",
  iconUrl: '/assets/items/7332.png',
  examine: "A shield with a heraldic design",
  value: 1632,
  highAlch: 979,
  lowAlch: 652,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_shield_(h1)',
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

export const BlackShieldH1 = Item.fromJson(blackShieldH1Data);
