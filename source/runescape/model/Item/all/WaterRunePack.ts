import { Item } from "../Item";

const WaterRunePackData = {{
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
    id: 12730,
    name: "Water rune pack"
  }
export const WaterRunePack = Item.fromJson(WaterRunePackData);