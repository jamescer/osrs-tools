import { Item } from '../Item';

const pinkBoaterData = {
  id: 12309,
  name: "Pink boater",
  iconUrl: "/assets/items/pink-boater.png",
  examine: "Stylish!",
  value: 225,
  highAlch: 135,
  lowAlch: 90,
  weight: 0.01,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Pink_boater",
};

export const PinkBoater = Item.fromJson(pinkBoaterData);
