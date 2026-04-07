import { Item } from '../Item';

const sFeetData = {
  id: 20092,
  name: "Mummy's feet",
  iconUrl: "/assets/items/mummys-feet.png",
  examine: "A mummy's feet.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Mummy's_feet",
};

export const SFeet = Item.fromJson(sFeetData);
