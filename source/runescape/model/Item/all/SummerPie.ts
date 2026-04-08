import { Item, ItemJson } from '../Item';

const summerPieData: ItemJson = {
  id: 7218,
  name: 'Summer pie',
  examine: 'A Summer pie.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Summer_pie',
  iconUrl: '/assets/items/summer-pie.png',
};

export const SummerPie = Item.fromJson(summerPieData);
