import { Item, ItemJson } from '../Item';

const crawsBowtData: ItemJson = {
  id: 22550,
  name: 'Craw\'s bow',
  iconUrl: '/assets/items/22550.png',
  examine: 'A bow twisted from the claws of Craw.',
  value: 1000000,
  highAlch: 600000,
  lowAlch: 400000,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2021-08-02',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Craw%27s_bow',
  attackRanged: 110,
  rangedStrength: 10,
  defenceRanged: 5,
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  meleeStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const CrawsBow = Item.fromJson(crawsBowtData);
