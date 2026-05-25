import { Item } from "../Item";

const RawWildPieData = {{
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
    id: 7206,
    name: "Raw wild pie"
  }
export const RawWildPie = Item.fromJson(RawWildPieData);