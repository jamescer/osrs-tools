import { Item } from '../Item';

const sHelmData = {
  id: 11864,
  name: "Slayer helmet",
  iconUrl: "/assets/items/slayer-helmet.png",
  examine: "You don't want to wear it inside-out.",
  value: 40000,
  highAlch: 24000,
  lowAlch: 16000,
  weight: 2.267,
  members: true,
  tradeable: false,
  equipable: true,
  releaseDate: "2014-01-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Slayer_helmet",
};

export const SHelm = Item.fromJson(sHelmData);
