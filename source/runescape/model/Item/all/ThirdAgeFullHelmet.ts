import { Item } from '../Item';

const ThirdAgeFullHelmetData = {
  id: 10350,
  name: "3rd age full helmet",
  iconUrl: "/assets/items/3rd-age-full-helmet.png",
  examine: "Fabulously ancient armour beaten from magical silver.",
  value: 90000,
  highAlch: 54000,
  lowAlch: 36000,
  weight: 0.907,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_full_helmet",
};

export const ThirdAgeFullHelmet = Item.fromJson(ThirdAgeFullHelmetData);
