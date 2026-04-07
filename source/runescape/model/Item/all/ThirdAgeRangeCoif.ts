import { Item } from '../Item';

const ThirdAgeRangeCoifData = {
  id: 10334,
  name: "3rd age range coif",
  iconUrl: "/assets/items/3rd-age-range-coif.png",
  examine: "Fabulously ancient range protection crafted from white dragonhide.",
  value: 50400,
  highAlch: 30240,
  lowAlch: 20160,
  weight: 1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_range_coif",
};

export const ThirdAgeRangeCoif = Item.fromJson(ThirdAgeRangeCoifData);
