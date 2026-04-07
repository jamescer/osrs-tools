import { Item } from '../Item';

const saradominDHideBootsData = {
  id: 19933,
  name: "Saradomin d'hide boots",
  iconUrl: "/assets/items/saradomin-dhide-boots.png",
  examine: "Saradomin blessed dragonhide boots.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_d'hide_boots",
};

export const SaradominDHideBoots = Item.fromJson(saradominDHideBootsData);
