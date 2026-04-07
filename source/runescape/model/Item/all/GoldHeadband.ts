import { Item } from '../Item';

const goldHeadbandData = {
  id: 12303,
  name: "Gold headband",
  iconUrl: "/assets/items/gold-headband.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gold_headband",
};

export const GoldHeadband = Item.fromJson(goldHeadbandData);
