import { Item } from "../Item";

const YewLeavesData = {
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
    id: 6026,
    name: "Yew leaves"
  }
export const YewLeaves = Item.fromJson(YewLeavesData);
