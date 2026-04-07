import { Item } from '../Item';

const ancientMitreData = {
  id: 12203,
  name: "Ancient mitre",
  iconUrl: "/assets/items/ancient-mitre.png",
  examine: "An Ancient mitre.",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_mitre",
};

export const AncientMitre = Item.fromJson(ancientMitreData);
