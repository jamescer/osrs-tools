import { Item } from '../Item';

const magicSeedData = {
  id: 5316,
  name: "Magic seed",
  iconUrl: "/assets/items/magic-seed.png",
  examine: "Plant this in a plantpot of soil to grow a sapling.",
  value: 422,
  highAlch: 253,
  lowAlch: 168,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2005-06-06",
  destroy: "Drop",
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Magic_seed",
};

export const MagicSeed = Item.fromJson(magicSeedData);
