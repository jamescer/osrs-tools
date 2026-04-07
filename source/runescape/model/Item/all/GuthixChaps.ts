import { Item } from '../Item';

const guthixChapsData = {
  id: 10380,
  name: "Guthix chaps",
  iconUrl: "/assets/items/guthix-chaps.png",
  examine: "Guthix blessed dragonhide chaps.",
  value: 6000,
  highAlch: 3600,
  lowAlch: 2400,
  weight: 5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_chaps",
};

export const GuthixChaps = Item.fromJson(guthixChapsData);
