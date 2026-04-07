import { Item } from '../Item';

const oakPlankData = {
  id: 8778,
  name: "Oak plank",
  iconUrl: "/assets/items/oak-plank.png",
  examine: "A plank of sturdy oak.",
  value: 250,
  highAlch: 150,
  lowAlch: 100,
  weight: 0.8,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2006-05-31",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Oak_plank",
};

export const OakPlank = Item.fromJson(oakPlankData);
