import { Item } from "../Item";

const GrimyTarrominData = {{
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
    id: 203,
    name: "Grimy tarromin"
  }
export const GrimyTarromin = Item.fromJson(GrimyTarrominData);