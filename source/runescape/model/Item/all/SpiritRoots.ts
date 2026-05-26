import { Item } from "../Item";

const SpiritRootsData = {
    examine: "",
    value: 0,
    highAlch: 0,
    lowAlch: 0,
    weight: 0,
    members: false,
    tradeable: false,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "",
    id: 6053,
    name: "Spirit roots"
  }
export const SpiritRoots = Item.fromJson(SpiritRootsData);
