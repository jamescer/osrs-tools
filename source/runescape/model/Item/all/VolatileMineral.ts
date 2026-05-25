import { Item } from "../Item";

const VolatileMineralData = {{
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
    id: 13186,
    name: "Volatile mineral"
  }
export const VolatileMineral = Item.fromJson(VolatileMineralData);