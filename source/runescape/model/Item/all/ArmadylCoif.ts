import { Item } from '../Item';

const armadylCoifData = {
  id: 12512,
  name: "Armadyl coif",
  iconUrl: "/assets/items/armadyl-coif.png",
  examine: "Armadyl blessed dragonhide coif.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.9,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_coif",
};

export const ArmadylCoif = Item.fromJson(armadylCoifData);
