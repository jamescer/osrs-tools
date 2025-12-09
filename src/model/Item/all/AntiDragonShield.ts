import { Item, ItemJson } from '../Item';

const antidragonShieldData: ItemJson = {
  attackCrush: 0,
  attackMagic: -3,
  attackRanged: -3,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 22,
  defenceMagic: 0,
  defenceRanged: 22,
  defenceSlash: 25,
  defenceStab: 20,
  destroy: 'Drop',
  equipable: true,
  examine: 'A shield that can deflect dragon breath.',
  highAlch: 60,
  id: 1540,
  lowAlch: 40,
  members: false,
  meleeStrength: 0,
  name: 'Anti-dragon shield',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Anti-dragon_shield',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2001',
  stackable: false,
  tradeable: true,
  value: 100,
  weight: 2.267,
};

export const AntiDragonShield = Item.fromJson(antidragonShieldData);
