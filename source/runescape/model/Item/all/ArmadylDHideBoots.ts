import { Item } from '../Item';

const armadylDHideBootsData = {
  id: 19930,
  name: "Armadyl d'hide boots",
  iconUrl: "/assets/items/armadyl-dhide-boots.png",
  examine: "Armadyl blessed dragonhide boots.",
  value: 9300,
  highAlch: 5580,
  lowAlch: 3720,
  weight: 1.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_d'hide_boots",
};

export const ArmadylDHideBoots = Item.fromJson(armadylDHideBootsData);
