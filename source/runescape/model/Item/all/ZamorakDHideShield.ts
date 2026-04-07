import { Item } from '../Item';

const zamorakDHideShieldData = {
  id: 23194,
  name: "Zamorak d'hide shield",
  iconUrl: "/assets/items/zamorak-dhide-shield.png",
  examine: "Zamorak blessed wooden shield covered in dragon leather.",
  value: 28334,
  highAlch: 17000,
  lowAlch: 11333,
  weight: 8,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_d'hide_shield",
};

export const ZamorakDHideShield = Item.fromJson(zamorakDHideShieldData);
