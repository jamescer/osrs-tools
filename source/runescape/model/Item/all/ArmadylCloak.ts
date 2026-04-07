import { Item } from '../Item';

const armadylCloakData = {
  id: 12261,
  name: "Armadyl cloak",
  iconUrl: "/assets/items/armadyl-cloak.png",
  examine: "An Armadyl cloak.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_cloak",
};

export const ArmadylCloak = Item.fromJson(armadylCloakData);
