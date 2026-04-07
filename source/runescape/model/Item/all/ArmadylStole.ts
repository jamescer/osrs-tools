import { Item } from '../Item';

const armadylStoleData = {
  id: 12257,
  name: "Armadyl stole",
  iconUrl: "/assets/items/armadyl-stole.png",
  examine: "An Armadyl stole.",
  value: 2500,
  highAlch: 1500,
  lowAlch: 1000,
  weight: 0.01,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_stole",
};

export const ArmadylStole = Item.fromJson(armadylStoleData);
