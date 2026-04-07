import { Item } from '../Item';

const guthixDHideBodyData = {
  id: 10378,
  name: "Guthix d'hide body",
  iconUrl: "/assets/items/guthix-dhide-body.png",
  examine: "Guthix blessed dragonhide body armour.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_d'hide_body",
};

export const GuthixDHideBody = Item.fromJson(guthixDHideBodyData);
