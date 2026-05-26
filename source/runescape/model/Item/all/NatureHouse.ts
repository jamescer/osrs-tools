import { Item } from "../Item";

const NatureHouseData = {
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
    id: 12709,
    name: "Nature house"
  }
export const NatureHouse = Item.fromJson(NatureHouseData);
