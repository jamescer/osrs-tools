import { Item } from "../Item";

const ChickenHeadData = {{
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
    id: 11021,
    name: "Chicken head"
  }
export const ChickenHead = Item.fromJson(ChickenHeadData);