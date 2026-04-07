import { Item } from '../Item';

const runeCrossbowData = {
  id: 9185,
  name: "Rune crossbow",
  iconUrl: "/assets/items/rune-crossbow.png",
  examine: "A runite crossbow.",
  value: 16200,
  highAlch: 9720,
  lowAlch: 6480,
  weight: 6,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-07-31",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_crossbow",
};

export const RuneCrossbow = Item.fromJson(runeCrossbowData);
