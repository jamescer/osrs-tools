import { Item } from '../Item';

const saradominCoifData = {
  id: 10390,
  name: "Saradomin coif",
  iconUrl: "/assets/items/saradomin-coif.png",
  examine: "Saradomin blessed dragonhide coif.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.9,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_coif",
};

export const SaradominCoif = Item.fromJson(saradominCoifData);
