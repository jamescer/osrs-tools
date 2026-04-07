import { Item } from '../Item';

const sandwichLadyTopData = {
  id: 23315,
  name: "Sandwich lady top",
  iconUrl: "/assets/items/sandwich-lady-top.png",
  examine: "A top worn by a sandwich lady.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Sandwich_lady_top",
};

export const SandwichLadyTop = Item.fromJson(sandwichLadyTopData);
