import { Item } from '../Item';

const zamorakDHideBodyData = {
  id: 10370,
  name: "Zamorak d'hide body",
  iconUrl: "/assets/items/zamorak-dhide-body.png",
  examine: "Zamorak blessed dragonhide body armour.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_d'hide_body",
};

export const ZamorakDHideBody = Item.fromJson(zamorakDHideBodyData);
