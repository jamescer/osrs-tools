import { Item } from "../Item";

const SteelNailsData = {
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
    id: 1539,
    name: "Steel nails"
  }
export const SteelNails = Item.fromJson(SteelNailsData);
