import { Item } from '../Item';

const monksRobeTData = {
  id: 23306,
  name: "Monk's robe (t)",
  iconUrl: "/assets/items/monks-robe-t.png",
  examine: "I feel the gods don't enjoy my materialistic obsessions.",
  value: 500,
  highAlch: 300,
  lowAlch: 200,
  weight: 0.907,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Monk's_robe_(t)",
};

export const MonksRobeT = Item.fromJson(monksRobeTData);
