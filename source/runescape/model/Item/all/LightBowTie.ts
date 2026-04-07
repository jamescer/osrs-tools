import { Item } from '../Item';

const lightBowTieData = {
  id: 19985,
  name: "Light bow tie",
  iconUrl: "/assets/items/light-bow-tie.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Light_bow_tie",
};

export const LightBowTie = Item.fromJson(lightBowTieData);
