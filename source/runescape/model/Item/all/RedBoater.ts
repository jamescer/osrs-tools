import { Item } from '../Item';

const redBoaterData = {
  id: 7319,
  name: "Red boater",
  iconUrl: "/assets/items/red-boater.png",
  examine: "Stylish!",
  value: 225,
  highAlch: 135,
  lowAlch: 90,
  weight: 0.01,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-02-20",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Red_boater",
};

export const RedBoater = Item.fromJson(redBoaterData);
