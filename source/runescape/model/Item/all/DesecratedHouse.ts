import { Item } from "../Item";

const DesecratedHouseData = {{
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
    id: 12708,
    name: "Desecrated house"
  }
export const DesecratedHouse = Item.fromJson(DesecratedHouseData);