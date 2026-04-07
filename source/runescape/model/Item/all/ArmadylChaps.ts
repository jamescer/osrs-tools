import { Item } from '../Item';

const armadylChapsData = {
  id: 12510,
  name: "Armadyl chaps",
  iconUrl: "/assets/items/armadyl-chaps.png",
  examine: "Armadyl blessed dragonhide chaps.",
  value: 6000,
  highAlch: 3600,
  lowAlch: 2400,
  weight: 5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_chaps",
};

export const ArmadylChaps = Item.fromJson(armadylChapsData);
