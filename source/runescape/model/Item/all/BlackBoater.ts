import { Item } from '../Item';

const blackBoaterData = {
  id: 7327,
  name: "Black boater",
  iconUrl: "/assets/items/black-boater.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_boater",
};

export const BlackBoater = Item.fromJson(blackBoaterData);
