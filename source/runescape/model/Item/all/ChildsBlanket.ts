import { Item } from "../Item";

const ChildsBlanketData = {{
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
    id: 90,
    name: "Child's blanket"
  }
export const ChildsBlanket = Item.fromJson(ChildsBlanketData);