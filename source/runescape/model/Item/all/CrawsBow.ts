import { Item, ItemJson } from '../Item';

const crawsBowtData: ItemJson = {
  id: 22550,
  name: 'Craw\'s bow',
  iconUrl: '/assets/items/craws-bow.png',
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
};

export const CrawsBow = Item.fromJson(crawsBowtData);
