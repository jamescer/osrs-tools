import { Item } from "../Item";

const VialOfWaterData = {{
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
    id: 227,
    name: "Vial of water"
  }
export const VialOfWater = Item.fromJson(VialOfWaterData);