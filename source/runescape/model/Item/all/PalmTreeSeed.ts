import { Item } from '../Item';

const palmTreeSeedData = {
  id: 5289,
  name: "Palm tree seed",
  iconUrl: "/assets/items/palm-tree-seed.png",
  examine: "Plant in a plantpot of soil to grow a sapling.",
  value: 254,
  highAlch: 152,
  lowAlch: 101,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2005-06-06",
  destroy: "Drop",
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Palm_tree_seed",
};

export const PalmTreeSeed = Item.fromJson(palmTreeSeedData);
