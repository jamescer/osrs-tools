import { Item } from '../Item';

const redHeadbandData = {
  id: 2645,
  name: "Red headband",
  iconUrl: "/assets/items/red-headband.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Red_headband",
};

export const RedHeadband = Item.fromJson(redHeadbandData);
