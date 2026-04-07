import { Item } from '../Item';

const dragonDaggerData = {
  id: 1215,
  name: "Dragon dagger",
  iconUrl: "/assets/items/dragon-dagger.png",
  examine: "A powerful dagger.",
  value: 30000,
  highAlch: 18000,
  lowAlch: 12000,
  weight: 0.453,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2004-01-06",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_dagger",
};

export const DragonDagger = Item.fromJson(dragonDaggerData);
