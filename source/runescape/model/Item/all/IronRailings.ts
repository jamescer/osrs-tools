import { Item } from "../Item";

const IronRailingsData = {
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
    id: 8199,
    name: "Iron railings"
  }
export const IronRailings = Item.fromJson(IronRailingsData);
