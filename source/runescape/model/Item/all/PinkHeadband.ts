import { Item } from '../Item';

const pinkHeadbandData = {
  id: 12305,
  name: "Pink headband",
  iconUrl: "/assets/items/pink-headband.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Pink_headband",
};

export const PinkHeadband = Item.fromJson(pinkHeadbandData);
