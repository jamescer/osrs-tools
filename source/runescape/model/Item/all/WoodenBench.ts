import { Item } from "../Item";

const WoodenBenchData = {
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
    id: 8108,
    name: "Wooden bench"
  }
export const WoodenBench = Item.fromJson(WoodenBenchData);
