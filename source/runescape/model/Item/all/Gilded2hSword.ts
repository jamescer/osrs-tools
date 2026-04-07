import { Item } from '../Item';

const gilded2hSwordData = {
  id: 20155,
  name: "Gilded 2h sword",
  iconUrl: "/assets/items/gilded-2h-sword.png",
  examine: "A two handed sword with gold plate.",
  value: 64000,
  highAlch: 38400,
  lowAlch: 25600,
  weight: 3.628,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_2h_sword",
};

export const Gilded2hSword = Item.fromJson(gilded2hSwordData);
