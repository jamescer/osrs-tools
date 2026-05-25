import { Item } from "../Item";

const TrollConstructionData = {{
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
    id: 8136,
    name: "Troll (Construction)"
  }
export const TrollConstruction = Item.fromJson(TrollConstructionData);