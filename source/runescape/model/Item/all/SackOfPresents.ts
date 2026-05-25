import { Item } from "../Item";

const SackOfPresentsData = {{
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
    id: 20834,
    name: "Sack of presents"
  }
export const SackOfPresents = Item.fromJson(SackOfPresentsData);