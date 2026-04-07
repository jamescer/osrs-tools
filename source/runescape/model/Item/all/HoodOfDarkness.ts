import { Item } from '../Item';

const hoodOfDarknessData = {
  id: 20128,
  name: "Hood of darkness",
  iconUrl: "/assets/items/hood-of-darkness.png",
  examine: "A dark power is woven into this hood.",
  value: 10000,
  highAlch: 6000,
  lowAlch: 4000,
  weight: 0.453,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Hood_of_darkness",
};

export const HoodOfDarkness = Item.fromJson(hoodOfDarknessData);
