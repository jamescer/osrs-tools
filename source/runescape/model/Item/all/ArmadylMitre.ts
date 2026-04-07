import { Item } from '../Item';

const armadylMitreData = {
  id: 12259,
  name: "Armadyl mitre",
  iconUrl: "/assets/items/armadyl-mitre.png",
  examine: "An Armadyl mitre.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_mitre",
};

export const ArmadylMitre = Item.fromJson(armadylMitreData);
