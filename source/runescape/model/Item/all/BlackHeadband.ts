import { Item } from '../Item';

const blackHeadbandData = {
  id: 2647,
  name: "Black headband",
  iconUrl: "/assets/items/black-headband.png",
  examine: "A minimalist's hat.",
  value: 40,
  highAlch: 24,
  lowAlch: 16,
  weight: 0.04,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2004-05-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_headband",
};

export const BlackHeadband = Item.fromJson(blackHeadbandData);
