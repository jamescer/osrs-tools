import { Item } from "../Item";

const tanCavalierData = {
  id: 2639,
  name: "Tan cavalier",
  iconUrl: "/assets/items/tan-cavalier.png",
  examine: "All for one and one for all!",
  value: 200,
  highAlch: 120,
  lowAlch: 80,
  weight: 0.08,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2004-05-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Tan_cavalier",
};

export const TanCavalier = Item.fromJson(tanCavalierData);
