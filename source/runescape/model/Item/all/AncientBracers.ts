import { Item } from '../Item';

const ancientBracersData = {
  id: 12490,
  name: "Ancient bracers",
  iconUrl: "/assets/items/ancient-bracers.png",
  examine: "Ancient blessed dragonhide vambraces.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_bracers",
};

export const AncientBracers = Item.fromJson(ancientBracersData);
