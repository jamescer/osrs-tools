import { Item } from '../Item';

const cabbageData = {
  id: 1965,
  name: "Cabbage",
  iconUrl: "/assets/items/cabbage.png",
  examine: "Yuck I don't like cabbage.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.453,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-01-04",
  destroy: "Eat",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Cabbage",
};

export const Cabbage = Item.fromJson(cabbageData);
