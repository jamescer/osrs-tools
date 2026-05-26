import { Item } from "../Item";

const SteelRangeemptyData = {
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
    id: 8221,
    name: "Steel range#Empty"
  }
export const SteelRangeempty = Item.fromJson(SteelRangeemptyData);
