import { Item } from '../Item';

const purpleSweetsData = {
  id: 10476,
  name: "Purple sweets",
  iconUrl: "/assets/items/purple-sweets.png",
  examine: "Remember to brush after eating!",
  value: 15,
  highAlch: 9,
  lowAlch: 6,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2006-12-05",
  destroy: "Eat",
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Purple_sweets",
};

export const PurpleSweets = Item.fromJson(purpleSweetsData);
