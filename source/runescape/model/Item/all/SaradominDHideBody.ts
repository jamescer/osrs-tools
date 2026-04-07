import { Item } from '../Item';

const saradominDHideBodyData = {
  id: 10386,
  name: "Saradomin d'hide body",
  iconUrl: "/assets/items/saradomin-dhide-body.png",
  examine: "Saradomin blessed dragonhide body armour.",
  value: 13000,
  highAlch: 7800,
  lowAlch: 5200,
  weight: 6,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_d'hide_body",
};

export const SaradominDHideBody = Item.fromJson(saradominDHideBodyData);
