import { Item } from "../Item";

const LunarCapeData = {{
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
    id: 9101,
    name: "Lunar cape"
  }
export const LunarCape = Item.fromJson(LunarCapeData);