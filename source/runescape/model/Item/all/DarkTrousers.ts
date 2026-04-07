import { Item } from '../Item';

const darkTrousersData = {
  id: 19964,
  name: "Dark trousers",
  iconUrl: "/assets/items/dark-trousers.png",
  examine: "Dark tuxedo trousers with white stockings.",
  value: 6000,
  highAlch: 3600,
  lowAlch: 2400,
  weight: 1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dark_trousers",
};

export const DarkTrousers = Item.fromJson(darkTrousersData);
