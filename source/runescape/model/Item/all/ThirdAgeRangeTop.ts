import { Item } from '../Item';

const ThirdAgeRangeTopData = {
  id: 10330,
  name: "3rd age range top",
  iconUrl: "/assets/items/3rd-age-range-top.png",
  examine: "Fabulously ancient range protection crafted from white dragonhide.",
  value: 50800,
  highAlch: 30480,
  lowAlch: 20320,
  weight: 4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_range_top",
};

export const ThirdAgeRangeTop = Item.fromJson(ThirdAgeRangeTopData);
