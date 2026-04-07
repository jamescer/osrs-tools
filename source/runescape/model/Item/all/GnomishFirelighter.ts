import { Item } from '../Item';

const gnomishFirelighterData = {
  id: 20275,
  name: "Gnomish firelighter",
  iconUrl: "/assets/items/gnomish-firelighter.png",
  examine: "Fill it with firelighters to make pretty fire.",
  value: 1000,
  highAlch: 600,
  lowAlch: 400,
  weight: 0.035,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: "2016-07-06",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gnomish_firelighter",
};

export const GnomishFirelighter = Item.fromJson(gnomishFirelighterData);
