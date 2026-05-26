import { Item } from "../Item";

const ExtraSupplyCrateData = {
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
    id: 20791,
    name: "Extra supply crate"
  }
export const ExtraSupplyCrate = Item.fromJson(ExtraSupplyCrateData);
