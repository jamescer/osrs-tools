import { Item } from '../Item';

const purpleFirelighterData = {
  id: 10326,
  name: "Purple firelighter",
  iconUrl: "/assets/items/purple-firelighter.png",
  examine: "Makes firelighting a lot easier.",
  value: 15,
  highAlch: 9,
  lowAlch: 6,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2006-12-05",
  destroy: "Drop",
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Purple_firelighter",
};

export const PurpleFirelighter = Item.fromJson(purpleFirelighterData);
