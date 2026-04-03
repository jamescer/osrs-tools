import { Item } from '../Item';

const monksRobeTopGData = {
  id: 7639,
  name: 'Monk\'s robe top (g)',
  iconUrl: '/assets/items/monks-robe-top-g.png',
  examine: 'A religious robe, decorated with gold trim.',
  value: 1560,
  highAlch: 936,
  lowAlch: 624,
  weight: 0.0,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2003-05-08',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Monk\'s_robe_top_(g)',
};

export const MonksRobeTopG = Item.fromJson(monksRobeTopGData);
