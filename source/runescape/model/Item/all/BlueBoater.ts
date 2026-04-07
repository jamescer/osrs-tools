import { Item } from '../Item';

const blueBoaterData = {
  id: 7325,
  name: "Blue boater",
  iconUrl: "/assets/items/blue-boater.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Blue_boater",
};

export const BlueBoater = Item.fromJson(blueBoaterData);
