import { Item } from '../Item';

const bowlWigData = {
  id: 20110,
  name: "Bowl wig",
  iconUrl: "/assets/items/bowl-wig.png",
  examine: "The bowl wig.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bowl_wig",
};

export const BowlWig = Item.fromJson(bowlWigData);
