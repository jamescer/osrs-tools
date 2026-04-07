import { Item } from '../Item';

const mummysHandsData = {
  id: 20086,
  name: "Mummy's hands",
  iconUrl: "/assets/items/mummys-hands.png",
  examine: "A mummy's hands.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Mummy's_hands",
};

export const MummysHands = Item.fromJson(mummysHandsData);
