import { Item } from "../Item";

const BlueFlowersData = {
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
    id: 2464,
    name: "Blue flowers"
  }
export const BlueFlowers = Item.fromJson(BlueFlowersData);
