import { Item } from '../Item';

const ThirdAgeRobeData = {
  id: 10340,
  name: "3rd age robe",
  iconUrl: "/assets/items/3rd-age-robe.png",
  examine: "Fabulously ancient mage protection enchanted in the 3rd Age.",
  value: 50600,
  highAlch: 30360,
  lowAlch: 20240,
  weight: 1.8,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_robe",
};

export const ThirdAgeRobe = Item.fromJson(ThirdAgeRobeData);
