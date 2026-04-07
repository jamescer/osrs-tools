import { Item } from '../Item';

const guthixCoifData = {
  id: 10382,
  name: "Guthix coif",
  iconUrl: "/assets/items/guthix-coif.png",
  examine: "Guthix blessed dragonhide coif.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.9,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_coif",
};

export const GuthixCoif = Item.fromJson(guthixCoifData);
