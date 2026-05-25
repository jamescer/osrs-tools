import { Item } from "../Item";

const BurntStewData = {{
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
    id: 2005,
    name: "Burnt stew"
  }
export const BurntStew = Item.fromJson(BurntStewData);