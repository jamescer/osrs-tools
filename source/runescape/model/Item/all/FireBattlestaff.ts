import { Item } from '../Item';

const fireBattlestaffData = {
  id: 1393,
  name: "Fire battlestaff",
  iconUrl: '/assets/items/1393.png',
  examine: "It's a slightly magical stick.",
  value: 15500,
  highAlch: 9300,
  lowAlch: 6200,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Fire_battlestaff',
};

export const FireBattlestaff = Item.fromJson(fireBattlestaffData);
