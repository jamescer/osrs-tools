import { Item } from '../Item';

const robeTopOfDarknessData = {
  id: 20131,
  name: "Robe top of darkness",
  iconUrl: "/assets/items/robe-top-of-darkness.png",
  examine: "A dark power is woven into this robe top.",
  value: 120000,
  highAlch: 72000,
  lowAlch: 48000,
  weight: 2.721,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Robe_top_of_darkness",
};

export const RobeTopOfDarkness = Item.fromJson(robeTopOfDarknessData);
