import { Item } from '../Item';

const ancientChapsData = {
  id: 12494,
  name: "Ancient chaps",
  iconUrl: "/assets/items/ancient-chaps.png",
  examine: "Ancient blessed dragonhide chaps.",
  value: 6000,
  highAlch: 3600,
  lowAlch: 2400,
  weight: 5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_chaps",
};

export const AncientChaps = Item.fromJson(ancientChapsData);
