import { Item } from '../Item';

const monocleData = {
  id: 12353,
  name: "Monocle",
  iconUrl: "/assets/items/monocle.png",
  examine: "Hmm, shallow and pedantic.",
  value: 1200,
  highAlch: 720,
  lowAlch: 480,
  weight: 0.001,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Monocle",
};

export const Monocle = Item.fromJson(monocleData);
