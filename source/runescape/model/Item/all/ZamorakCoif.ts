import { Item } from '../Item';

const zamorakCoifData = {
  id: 10374,
  name: "Zamorak coif",
  iconUrl: "/assets/items/zamorak-coif.png",
  examine: "Zamorak blessed dragonhide coif.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.9,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_coif",
};

export const ZamorakCoif = Item.fromJson(zamorakCoifData);
