import { Item } from '../Item';

const greenFirelighterData = {
  id: 7330,
  name: "Green firelighter",
  iconUrl: "/assets/items/green-firelighter.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Green_firelighter",
};

export const GreenFirelighter = Item.fromJson(greenFirelighterData);
