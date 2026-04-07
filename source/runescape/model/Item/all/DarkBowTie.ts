import { Item } from '../Item';

const darkBowTieData = {
  id: 19970,
  name: "Dark bow tie",
  iconUrl: "/assets/items/dark-bow-tie.png",
  examine: "Bow ties are cool.",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dark_bow_tie",
};

export const DarkBowTie = Item.fromJson(darkBowTieData);
