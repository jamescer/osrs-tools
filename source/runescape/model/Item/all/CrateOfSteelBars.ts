import { Item } from "../Item";

const CrateOfSteelBarsData = {
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
    id: 32777,
    name: "Crate of steel bars"
  }
export const CrateOfSteelBars = Item.fromJson(CrateOfSteelBarsData);
