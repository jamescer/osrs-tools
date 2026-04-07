import { Item } from '../Item';

const orangeBoaterData = {
  id: 7321,
  name: "Orange boater",
  iconUrl: "/assets/items/orange-boater.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Orange_boater",
};

export const OrangeBoater = Item.fromJson(orangeBoaterData);
