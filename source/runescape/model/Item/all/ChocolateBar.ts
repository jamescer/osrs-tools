import { Item } from "../Item";

const ChocolateBarData = {{
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
    id: 1973,
    name: "Chocolate bar"
  }
export const ChocolateBar = Item.fromJson(ChocolateBarData);