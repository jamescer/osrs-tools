import { Item } from '../Item';

const armadylBracersData = {
  id: 12506,
  name: "Armadyl bracers",
  iconUrl: "/assets/items/armadyl-bracers.png",
  examine: "Armadyl blessed dragonhide vambraces.",
  value: 4000,
  highAlch: 2400,
  lowAlch: 1600,
  weight: 1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_bracers",
};

export const ArmadylBracers = Item.fromJson(armadylBracersData);
