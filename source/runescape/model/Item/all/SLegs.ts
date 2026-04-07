import { Item } from '../Item';

const sLegsData = {
  id: 8859,
  name: "22lb shot",
  iconUrl: "/assets/items/22lb-shot.png",
  examine: "Just landed 22lb shot.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 9.979,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: "2006-06-13",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/22lb_shot",
};

export const SLegs = Item.fromJson(sLegsData);
