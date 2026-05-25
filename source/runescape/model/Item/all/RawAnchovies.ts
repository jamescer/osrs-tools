import { Item } from "../Item";

const RawAnchoviesData = {{
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
    id: 321,
    name: "Raw anchovies"
  }
export const RawAnchovies = Item.fromJson(RawAnchoviesData);