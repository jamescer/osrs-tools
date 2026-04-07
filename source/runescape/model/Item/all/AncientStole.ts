import { Item } from '../Item';

const ancientStoleData = {
  id: 12201,
  name: "Ancient stole",
  iconUrl: "/assets/items/ancient-stole.png",
  examine: "An Ancient stole.",
  value: 2500,
  highAlch: 1500,
  lowAlch: 1000,
  weight: 0.002,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_stole",
};

export const AncientStole = Item.fromJson(ancientStoleData);
