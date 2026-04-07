import { Item } from '../Item';

const zamorakMitreData = {
  id: 10456,
  name: "Zamorak mitre",
  iconUrl: "/assets/items/zamorak-mitre.png",
  examine: "A Zamorak mitre.",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_mitre",
};

export const ZamorakMitre = Item.fromJson(zamorakMitreData);
