import { Item } from '../Item';

const wolfCloakData = {
  id: 23410,
  name: "Wolf cloak",
  iconUrl: "/assets/items/wolf-cloak.png",
  examine: "A very warm wolf cloak.",
  value: 1000,
  highAlch: 600,
  lowAlch: 400,
  weight: 0.453,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Wolf_cloak",
};

export const WolfCloak = Item.fromJson(wolfCloakData);
