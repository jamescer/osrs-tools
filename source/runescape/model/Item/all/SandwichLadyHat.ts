import { Item } from '../Item';

const sandwichLadyHatData = {
  id: 23312,
  name: "Sandwich lady hat",
  iconUrl: "/assets/items/sandwich-lady-hat.png",
  examine: "A hat worn by a sandwich lady.",
  value: 200,
  highAlch: 120,
  lowAlch: 80,
  weight: 0.907,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Sandwich_lady_hat",
};

export const SandwichLadyHat = Item.fromJson(sandwichLadyHatData);
