import { Item } from "../Item";

const ChocolateDustData = {{
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
    id: 1975,
    name: "Chocolate dust"
  }
export const ChocolateDust = Item.fromJson(ChocolateDustData);