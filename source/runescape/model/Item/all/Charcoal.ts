import { Item } from "../Item";

const CharcoalData = {{
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
    id: 973,
    name: "Charcoal"
  }
export const Charcoal = Item.fromJson(CharcoalData);