import { Item } from '../Item';

const holyWrapsData = {
  id: 19997,
  name: "Holy wraps",
  iconUrl: "/assets/items/holy-wraps.png",
  examine: "Holy handwear!",
  value: 9600,
  highAlch: 5760,
  lowAlch: 3840,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Holy_wraps",
};

export const HolyWraps = Item.fromJson(holyWrapsData);
