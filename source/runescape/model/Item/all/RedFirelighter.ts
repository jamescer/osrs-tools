import { Item } from '../Item';

const redFirelighterData = {
  id: 7329,
  name: "Red firelighter",
  iconUrl: "/assets/items/red-firelighter.png",
  examine: "Makes firelighting a lot easier.",
  value: 15,
  highAlch: 9,
  lowAlch: 6,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2006-02-20",
  destroy: "Drop",
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Red_firelighter",
};

export const RedFirelighter = Item.fromJson(redFirelighterData);
