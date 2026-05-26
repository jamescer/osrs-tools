import { Item } from "../Item";

const CrateOfCalquatData = {
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
    id: 32749,
    name: "Crate of calquat"
  }
export const CrateOfCalquat = Item.fromJson(CrateOfCalquatData);
