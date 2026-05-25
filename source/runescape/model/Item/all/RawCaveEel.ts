import { Item } from "../Item";

const RawCaveEelData = {{
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
    id: 5001,
    name: "Raw cave eel"
  }
export const RawCaveEel = Item.fromJson(RawCaveEelData);