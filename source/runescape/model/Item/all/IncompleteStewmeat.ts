import { Item } from "../Item";

const IncompleteStewmeatData = {{
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
    id: 1999,
    name: "Incomplete stew#Meat"
  }
export const IncompleteStewmeat = Item.fromJson(IncompleteStewmeatData);