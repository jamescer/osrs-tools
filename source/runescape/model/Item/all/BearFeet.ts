import { Item } from '../Item';

const bearFeetData = {
  id: 23291,
  name: "Bear feet",
  iconUrl: "/assets/items/bear-feet.png",
  examine: "Vicious bear slippers.",
  value: 1000,
  highAlch: 600,
  lowAlch: 400,
  weight: 0.2,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bear_feet",
};

export const BearFeet = Item.fromJson(bearFeetData);
