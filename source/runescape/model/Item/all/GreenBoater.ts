import { Item } from '../Item';

const greenBoaterData = {
  id: 7323,
  name: "Green boater",
  iconUrl: "/assets/items/green-boater.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Green_boater",
};

export const GreenBoater = Item.fromJson(greenBoaterData);
