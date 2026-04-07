import { Item } from '../Item';

const dragonstoneBraceletData = {
  id: 11115,
  name: "Dragonstone bracelet",
  iconUrl: "/assets/items/dragonstone-bracelet.png",
  examine: "I wonder if this is valuable.",
  value: 19125,
  highAlch: 11475,
  lowAlch: 7650,
  weight: 0.25,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2007-04-30",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragonstone_bracelet",
};

export const DragonstoneBracelet = Item.fromJson(dragonstoneBraceletData);
