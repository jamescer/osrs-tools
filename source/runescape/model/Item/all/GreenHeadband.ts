import { Item } from '../Item';

const greenHeadbandData = {
  id: 12307,
  name: "Green headband",
  iconUrl: "/assets/items/green-headband.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Green_headband",
};

export const GreenHeadband = Item.fromJson(greenHeadbandData);
