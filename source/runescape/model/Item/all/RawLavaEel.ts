import { Item } from "../Item";

const RawLavaEelData = {{
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
    id: 2148,
    name: "Raw lava eel"
  }
export const RawLavaEel = Item.fromJson(RawLavaEelData);