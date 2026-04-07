import { Item } from '../Item';

const whiteHeadbandData = {
  id: 12299,
  name: "White headband",
  iconUrl: "/assets/items/white-headband.png",
  examine: "A minimalist's hat.",
  value: 40,
  highAlch: 24,
  lowAlch: 16,
  weight: 0.04,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/White_headband",
};

export const WhiteHeadband = Item.fromJson(whiteHeadbandData);
