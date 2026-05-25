import { Item } from "../Item";

const RatsTailData = {{
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
    id: 300,
    name: "Rat's tail"
  }
export const RatsTail = Item.fromJson(RatsTailData);