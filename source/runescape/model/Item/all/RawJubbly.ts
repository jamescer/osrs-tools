import { Item } from "../Item";

const RawJubblyData = {{
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
    id: 7566,
    name: "Raw jubbly"
  }
export const RawJubbly = Item.fromJson(RawJubblyData);