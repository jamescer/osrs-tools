import { Item, ItemJson } from "../Item";

const steelDaggerData: ItemJson = {
  id: 1207,
  name: "Steel dagger",
  examine: "A Steel dagger.",
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "24 September 2001",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Steel_dagger",
  iconUrl: "/assets/items/steel-dagger.png",
};

export const SteelDagger = Item.fromJson(steelDaggerData);
