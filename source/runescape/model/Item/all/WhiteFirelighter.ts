import { Item } from '../Item';

const whiteFirelighterData = {
  id: 10327,
  name: "White firelighter",
  iconUrl: "/assets/items/white-firelighter.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/White_firelighter",
};

export const WhiteFirelighter = Item.fromJson(whiteFirelighterData);
