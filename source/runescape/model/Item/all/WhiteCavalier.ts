import { Item } from '../Item';

const whiteCavalierData = {
  id: 12321,
  name: "White cavalier",
  iconUrl: "/assets/items/white-cavalier.png",
  examine: "All for one and one for all!",
  value: 200,
  highAlch: 120,
  lowAlch: 80,
  weight: 0.08,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/White_cavalier",
};

export const WhiteCavalier = Item.fromJson(whiteCavalierData);
