import { Item } from '../Item';

const guthixMitreData = {
  id: 10454,
  name: "Guthix mitre",
  iconUrl: "/assets/items/guthix-mitre.png",
  examine: "A Guthix mitre.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_mitre",
};

export const GuthixMitre = Item.fromJson(guthixMitreData);
