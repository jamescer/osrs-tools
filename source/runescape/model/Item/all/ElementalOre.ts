import { Item } from "../Item";

const ElementalOreData = {{
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
    id: 2892,
    name: "Elemental ore"
  }
export const ElementalOre = Item.fromJson(ElementalOreData);