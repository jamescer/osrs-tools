import { Item } from '../Item';

const zamorakCloakData = {
  id: 10450,
  name: "Zamorak cloak",
  iconUrl: "/assets/items/zamorak-cloak.png",
  examine: "A Zamorak cloak.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_cloak",
};

export const ZamorakCloak = Item.fromJson(zamorakCloakData);
