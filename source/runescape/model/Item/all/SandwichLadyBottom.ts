import { Item } from '../Item';

const sandwichLadyBottomData = {
  id: 23318,
  name: "Sandwich lady bottom",
  iconUrl: "/assets/items/sandwich-lady-bottom.png",
  examine: "Bottoms worn by a sandwich lady.",
  value: 300,
  highAlch: 180,
  lowAlch: 120,
  weight: 0.907,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Sandwich_lady_bottom",
};

export const SandwichLadyBottom = Item.fromJson(sandwichLadyBottomData);
