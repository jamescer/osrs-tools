import { Item } from '../Item';

const demonFeetData = {
  id: 23294,
  name: "Demon feet",
  iconUrl: "/assets/items/demon-feet.png",
  examine: "Vicious demon slippers.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Demon_feet",
};

export const DemonFeet = Item.fromJson(demonFeetData);
