import { Item } from '../Item';

const armadylDHideBodyData = {
  id: 12508,
  name: "Armadyl d'hide body",
  iconUrl: "/assets/items/armadyl-dhide-body.png",
  examine: "Armadyl blessed dragonhide body armour.",
  value: 13000,
  highAlch: 7800,
  lowAlch: 5200,
  weight: 6,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_d'hide_body",
};

export const ArmadylDHideBody = Item.fromJson(armadylDHideBodyData);
