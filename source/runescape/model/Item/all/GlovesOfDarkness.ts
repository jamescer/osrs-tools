import { Item } from '../Item';

const glovesOfDarknessData = {
  id: 20134,
  name: "Gloves of darkness",
  iconUrl: "/assets/items/gloves-of-darkness.png",
  examine: "A dark power is woven into these gloves.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gloves_of_darkness",
};

export const GlovesOfDarkness = Item.fromJson(glovesOfDarknessData);
