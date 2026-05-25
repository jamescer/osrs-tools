import { Item } from "../Item";

const ForagersPouchData = {{
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
    id: 30357,
    name: "Forager's pouch"
  }
export const ForagersPouch = Item.fromJson(ForagersPouchData);