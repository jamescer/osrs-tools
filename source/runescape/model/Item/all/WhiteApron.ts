import { Item } from "../Item";

const WhiteApronData = {{
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
    id: 1005,
    name: "White apron"
  }
export const WhiteApron = Item.fromJson(WhiteApronData);