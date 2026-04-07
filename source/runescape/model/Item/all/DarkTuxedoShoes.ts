import { Item } from '../Item';

const darkTuxedoShoesData = {
  id: 19967,
  name: "Dark tuxedo shoes",
  iconUrl: "/assets/items/dark-tuxedo-shoes.png",
  examine: "Dark shoes to match your dark tuxedo.",
  value: 3000,
  highAlch: 1800,
  lowAlch: 1200,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dark_tuxedo_shoes",
};

export const DarkTuxedoShoes = Item.fromJson(darkTuxedoShoesData);
