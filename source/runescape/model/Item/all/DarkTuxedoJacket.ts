import { Item } from '../Item';

const darkTuxedoJacketData = {
  id: 19958,
  name: "Dark tuxedo jacket",
  iconUrl: "/assets/items/dark-tuxedo-jacket.png",
  examine: "A dark tuxedo jacket with a white shirt.",
  value: 10000,
  highAlch: 6000,
  lowAlch: 4000,
  weight: 2,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dark_tuxedo_jacket",
};

export const DarkTuxedoJacket = Item.fromJson(darkTuxedoJacketData);
