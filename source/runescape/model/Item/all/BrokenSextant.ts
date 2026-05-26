import { Item } from "../Item";

const BrokenSextantData = {
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
    id: 32868,
    name: "Broken sextant"
  }
export const BrokenSextant = Item.fromJson(BrokenSextantData);
