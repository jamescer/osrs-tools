import { Item } from '../Item';

const hideVambracesData = {
  id: 30082,
  name: "Hueycoatl hide vambraces",
  iconUrl: "/assets/items/hueycoatl-hide-vambraces.png",
  examine: "Made from real Huey hide!",
  value: 4320,
  highAlch: 2592,
  lowAlch: 1728,
  weight: 0.283,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2024-09-25",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Hueycoatl_hide_vambraces",
};

export const HideVambraces = Item.fromJson(hideVambracesData);
