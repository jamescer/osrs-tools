import { Item } from '../Item';

const afroData = {
  id: 12430,
  name: "Afro",
  iconUrl: "/assets/items/afro.png",
  examine: "Wild!",
  value: 684,
  highAlch: 410,
  lowAlch: 273,
  weight: 0.453,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Afro",
};

export const Afro = Item.fromJson(afroData);
