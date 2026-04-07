import { Item } from '../Item';

const aleOfTheGodsData = {
  id: 20056,
  name: "Ale of the gods",
  iconUrl: "/assets/items/ale-of-the-gods.png",
  examine: "Ale of the gods.",
  value: 850,
  highAlch: 510,
  lowAlch: 340,
  weight: 0.06,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ale_of_the_gods",
};

export const AleOfTheGods = Item.fromJson(aleOfTheGodsData);
