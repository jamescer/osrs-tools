import { Item } from '../Item';

const purpleBoaterData = {
  id: 12311,
  name: "Purple boater",
  iconUrl: "/assets/items/purple-boater.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Purple_boater",
};

export const PurpleBoater = Item.fromJson(purpleBoaterData);
