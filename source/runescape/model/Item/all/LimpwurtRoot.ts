import { Item } from '../Item';

const limpwurtRootData = {
  id: 225,
  name: "Limpwurt root",
  iconUrl: "/assets/items/limpwurt-root.png",
  examine: "The root of a limpwurt plant.",
  value: 7,
  highAlch: 4,
  lowAlch: 2,
  weight: 0.007,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-02-05",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Limpwurt_root",
};

export const LimpwurtRoot = Item.fromJson(limpwurtRootData);
