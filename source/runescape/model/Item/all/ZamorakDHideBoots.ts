import { Item } from '../Item';

const zamorakDHideBootsData = {
  id: 19936,
  name: "Zamorak d'hide boots",
  iconUrl: "/assets/items/zamorak-dhide-boots.png",
  examine: "Zamorak blessed dragonhide boots.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_d'hide_boots",
};

export const ZamorakDHideBoots = Item.fromJson(zamorakDHideBootsData);
