import { Item } from "../Item";

const MahoganyHouseData = {{
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
    id: 12706,
    name: "Mahogany house"
  }
export const MahoganyHouse = Item.fromJson(MahoganyHouseData);