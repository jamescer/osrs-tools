import { Item } from "../Item";

const ArcaneSigilData = {{
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
    id: 12827,
    name: "Arcane sigil"
  }
export const ArcaneSigil = Item.fromJson(ArcaneSigilData);