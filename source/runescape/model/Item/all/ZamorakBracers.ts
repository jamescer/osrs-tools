import { Item } from '../Item';

const zamorakBracersData = {
  id: 10368,
  name: "Zamorak bracers",
  iconUrl: "/assets/items/zamorak-bracers.png",
  examine: "Zamorak blessed dragonhide vambraces.",
  value: 4000,
  highAlch: 2400,
  lowAlch: 1600,
  weight: 1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_bracers",
};

export const ZamorakBracers = Item.fromJson(zamorakBracersData);
