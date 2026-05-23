import { Item } from '../Item';

const blueFirelighterData = {
  id: 7331,
  name: "Blue firelighter",
  iconUrl: "/assets/items/7331.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Blue_firelighter",
};

export const BlueFirelighter = Item.fromJson(blueFirelighterData);
