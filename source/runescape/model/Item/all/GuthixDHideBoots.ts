import { Item } from '../Item';

const guthixDHideBootsData = {
  id: 19927,
  name: "Guthix d'hide boots",
  iconUrl: "/assets/items/guthix-dhide-boots.png",
  examine: "Guthix blessed dragonhide boots.",
  value: 9300,
  highAlch: 5580,
  lowAlch: 3720,
  weight: 1.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_d'hide_boots",
};

export const GuthixDHideBoots = Item.fromJson(guthixDHideBootsData);
