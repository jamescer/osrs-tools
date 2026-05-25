import { Item } from "../Item";

const RawMudPieData = {{
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
    id: 7168,
    name: "Raw mud pie"
  }
export const RawMudPie = Item.fromJson(RawMudPieData);