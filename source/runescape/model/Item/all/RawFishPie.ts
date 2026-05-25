import { Item } from "../Item";

const RawFishPieData = {{
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
    id: 7186,
    name: "Raw fish pie"
  }
export const RawFishPie = Item.fromJson(RawFishPieData);