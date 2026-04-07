import { Item } from '../Item';

const grimySnapdragonData = {
  id: 3051,
  name: "Grimy snapdragon",
  iconUrl: "/assets/items/grimy-snapdragon.png",
  examine: "It needs cleaning.",
  value: 21,
  highAlch: 12,
  lowAlch: 8,
  weight: 0.007,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2005-07-11",
  destroy: "Clean",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Grimy_snapdragon",
};

export const GrimySnapdragon = Item.fromJson(grimySnapdragonData);
