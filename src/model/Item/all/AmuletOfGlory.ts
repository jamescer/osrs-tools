import { Item, ItemJson } from '../Item';

const amuletOfGloryData: ItemJson = {
  attackCrush: 0,
  attackMagic: 10,
  attackRanged: 10,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 3,
  defenceMagic: 3,
  defenceRanged: 3,
  defenceSlash: 3,
  defenceStab: 3,
  destroy: 'Drop',
  equipable: true,
  examine: 'A dragonstone amulet with four charges.',
  highAlch: 7200,
  id: 1704,
  lowAlch: 4800,
  members: true,
  meleeStrength: 6,
  name: 'Amulet of glory',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Amulet_of_glory',
  prayer: 3,
  questItem: false,
  releaseDate: '27 February 2002',
  stackable: false,
  tradeable: true,
  value: 12000,
  weight: 0.01,
};

export const AmuletOfGlory = Item.fromJson(amuletOfGloryData);
