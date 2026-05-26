import { Item } from "../Item";

const CureCrateData = {
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
    id: 26962,
    name: "Cure crate"
  }
export const CureCrate = Item.fromJson(CureCrateData);
