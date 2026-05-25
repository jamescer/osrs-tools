import { Item } from "../Item";

const CookedMeatData = {{
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
    id: 2142,
    name: "Cooked meat"
  }
export const CookedMeat = Item.fromJson(CookedMeatData);