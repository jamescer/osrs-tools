import { Item } from '../Item';

const briefcaseData = {
  id: 12335,
  name: "Briefcase",
  iconUrl: "/assets/items/briefcase.png",
  examine: "For your first day in the big city.",
  value: 666,
  highAlch: 399,
  lowAlch: 266,
  weight: 0.005,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Briefcase",
};

export const Briefcase = Item.fromJson(briefcaseData);
