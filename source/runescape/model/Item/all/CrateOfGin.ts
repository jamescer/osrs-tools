import { Item } from "../Item";

const CrateOfGinData = {
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
    id: 32640,
    name: "Crate of gin"
  }
export const CrateOfGin = Item.fromJson(CrateOfGinData);
