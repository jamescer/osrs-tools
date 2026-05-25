import { Item } from "../Item";

const PurpleCandyData = {{
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
    id: 24983,
    name: "Purple candy"
  }
export const PurpleCandy = Item.fromJson(PurpleCandyData);