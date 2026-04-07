import { Item } from '../Item';

const zamorakChapsData = {
  id: 10372,
  name: "Zamorak chaps",
  iconUrl: "/assets/items/zamorak-chaps.png",
  examine: "Zamorak blessed dragonhide chaps.",
  value: 6000,
  highAlch: 3600,
  lowAlch: 2400,
  weight: 5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_chaps",
};

export const ZamorakChaps = Item.fromJson(zamorakChapsData);
