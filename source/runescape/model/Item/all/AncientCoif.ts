import { Item } from '../Item';

const ancientCoifData = {
  id: 12496,
  name: "Ancient coif",
  iconUrl: "/assets/items/ancient-coif.png",
  examine: "Ancient blessed dragonhide coif.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.9,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_coif",
};

export const AncientCoif = Item.fromJson(ancientCoifData);
