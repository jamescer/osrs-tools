import { Item, ItemJson } from '../Item';

const suqahTeethData: ItemJson = {
  equipable: false,
  examine: 'Sharp teeth from a Suqah.',
  id: 9079,
  members: true,
  name: 'Suqah teeth',
  iconUrl: '/assets/items/9079.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Suqah_teeth',
  questItem: false,
  stackable: true,
  tradeable: false,
  value: 3,
  weight: 0,
  highAlch: 0,
  lowAlch: 0,
  releaseDate: '',
  destroy: '',
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

export const SuqahTeeth = Item.fromJson(suqahTeethData);
