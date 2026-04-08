import { Item, ItemJson } from '../Item';

const summerPieData: ItemJson = {
  id: 7218,
  name: 'Summer pie',
  examine: 'A Summer pie.',
  highAlch: 1,
  lowAlch: 1,
  members: true,
  noted: false,
  tradeable: true,
  stackable: false,
  questItem: false,
  value: 1,
  releaseDate: '24 September 2001',
  weight: 0,
  iconUrl: '/assets/items/summer-pie.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Summer_pie',
};

export const SummerPie = Item.fromJson(summerPieData);