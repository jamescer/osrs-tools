import { Item } from '../Item';

const saradominBracersData = {
  id: 10384,
  name: "Saradomin bracers",
  iconUrl: "/assets/items/saradomin-bracers.png",
  examine: "Saradomin blessed dragonhide vambraces.",
  value: 4000,
  highAlch: 2400,
  lowAlch: 1600,
  weight: 1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_bracers",
};

export const SaradominBracers = Item.fromJson(saradominBracersData);
