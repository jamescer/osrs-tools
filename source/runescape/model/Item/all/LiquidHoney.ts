import { Item } from "../Item";

const LiquidHoneyData = {{
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
    id: 416,
    name: "Liquid honey"
  }
export const LiquidHoney = Item.fromJson(LiquidHoneyData);