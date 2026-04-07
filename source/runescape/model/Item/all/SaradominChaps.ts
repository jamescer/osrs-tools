import { Item } from '../Item';

const saradominChapsData = {
  id: 10388,
  name: "Saradomin chaps",
  iconUrl: "/assets/items/saradomin-chaps.png",
  examine: "Saradomin blessed dragonhide chaps.",
  value: 6000,
  highAlch: 3600,
  lowAlch: 2400,
  weight: 5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_chaps",
};

export const SaradominChaps = Item.fromJson(saradominChapsData);
