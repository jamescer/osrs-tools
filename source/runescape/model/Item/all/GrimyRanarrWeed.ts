import { Item } from '../Item';

const grimyRanarrWeedData = {
  id: 207,
  name: "Grimy ranarr weed",
  iconUrl: "/assets/items/grimy-ranarr-weed.png",
  examine: "It needs cleaning.",
  value: 30,
  highAlch: 18,
  lowAlch: 12,
  weight: 0.007,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2002-02-27",
  destroy: "Clean",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Grimy_ranarr_weed",
};

export const GrimyRanarrWeed = Item.fromJson(grimyRanarrWeedData);
