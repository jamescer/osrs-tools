import { Item } from '../Item';

const monksRobeTopTData = {
  id: 23303,
  name: "Monk's robe top (t)",
  iconUrl: "/assets/items/monks-robe-top-t.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Monk's_robe_top_(t)",
};

export const MonksRobeTopT = Item.fromJson(monksRobeTopTData);
