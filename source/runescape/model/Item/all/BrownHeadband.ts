import { Item } from '../Item';

const brownHeadbandData = {
  id: 2649,
  name: "Brown headband",
  iconUrl: "/assets/items/brown-headband.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Brown_headband",
};

export const BrownHeadband = Item.fromJson(brownHeadbandData);
