import { Item } from "../Item";

const CopperOreData = {{
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
    id: 436,
    name: "Copper ore"
  }
export const CopperOre = Item.fromJson(CopperOreData);