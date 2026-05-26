import { Item } from "../Item";

const AmylaseCrystalData = {
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
    id: 12640,
    name: "Amylase crystal"
  }
export const AmylaseCrystal = Item.fromJson(AmylaseCrystalData);
