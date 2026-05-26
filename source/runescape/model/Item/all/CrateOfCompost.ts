import { Item } from "../Item";

const CrateOfCompostData = {
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
    id: 32468,
    name: "Crate of compost"
  }
export const CrateOfCompost = Item.fromJson(CrateOfCompostData);
