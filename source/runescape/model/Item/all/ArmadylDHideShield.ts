import { Item } from '../Item';

const armadylDHideShieldData = {
  id: 23200,
  name: "Armadyl d'hide shield",
  iconUrl: "/assets/items/armadyl-dhide-shield.png",
  examine: "Armadyl blessed wooden shield covered in dragon leather.",
  value: 28334,
  highAlch: 17000,
  lowAlch: 11333,
  weight: 8,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_d'hide_shield",
};

export const ArmadylDHideShield = Item.fromJson(armadylDHideShieldData);
