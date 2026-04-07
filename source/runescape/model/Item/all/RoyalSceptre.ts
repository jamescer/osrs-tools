import { Item } from '../Item';

const royalSceptreData = {
  id: 12439,
  name: "Royal sceptre",
  iconUrl: "/assets/items/royal-sceptre.png",
  examine: "I dub thee...",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 4.535,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Royal_sceptre",
};

export const RoyalSceptre = Item.fromJson(royalSceptreData);
