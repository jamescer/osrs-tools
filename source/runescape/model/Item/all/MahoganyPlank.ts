import { Item } from '../Item';

const mahoganyPlankData = {
  id: 8782,
  name: "Mahogany plank",
  iconUrl: "/assets/items/mahogany-plank.png",
  examine: "A plank of expensive mahogany.",
  value: 1500,
  highAlch: 900,
  lowAlch: 600,
  weight: 0.8,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2006-05-31",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Mahogany_plank",
};

export const MahoganyPlank = Item.fromJson(mahoganyPlankData);
