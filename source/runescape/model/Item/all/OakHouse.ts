import { Item } from "../Item";

const OakHouseData = {
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
    id: 12704,
    name: "Oak house"
  }
export const OakHouse = Item.fromJson(OakHouseData);
