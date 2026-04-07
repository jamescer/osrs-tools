import { Item } from '../Item';

const grimyToadflaxData = {
  id: 3049,
  name: "Grimy toadflax",
  iconUrl: "/assets/items/grimy-toadflax.png",
  examine: "It needs cleaning.",
  value: 19,
  highAlch: 11,
  lowAlch: 7,
  weight: 0.007,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2005-07-11",
  destroy: "Clean",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Grimy_toadflax",
};

export const GrimyToadflax = Item.fromJson(grimyToadflaxData);
