import { Item } from '../Item';

const ThirdAgeRangeLegsData = {
  id: 10332,
  name: "3rd age range legs",
  iconUrl: "/assets/items/3rd-age-range-legs.png",
  examine: "Fabulously ancient range protection crafted from white dragonhide.",
  value: 50600,
  highAlch: 30360,
  lowAlch: 20240,
  weight: 3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_range_legs",
};

export const ThirdAgeRangeLegs = Item.fromJson(ThirdAgeRangeLegsData);
